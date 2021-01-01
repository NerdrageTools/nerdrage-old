/** @jest-environment node */
import { DocumentType } from '@typegoose/typegoose'
import { Article, ArticleClass } from '~/server/models/Article'
import { Campaign } from '~/server/models/Campaign'
import { getId } from '../utilities/getId'

process.env.TEST_SUITE = 'models-Article'

describe('models/Article', () => {
	let campaign: DocumentType<Campaign>
	let source: DocumentType<Campaign>
	let a: DocumentType<ArticleClass>
	let b: DocumentType<ArticleClass>
	let c: DocumentType<ArticleClass>
	let sourceA: DocumentType<ArticleClass>
	let sourceOnly: DocumentType<ArticleClass>

	beforeEach(async () => {
		await Article.deleteMany({})
		campaign = global.fixtures.campaigns.main
		source = global.fixtures.campaigns.daddy

		const common = {
			campaign: source,
			secret: false,
			tags: [],
			template: false,
		};
		[sourceA, sourceOnly] = await Article.create([
			{ ...common, aliases: ['src-a'], html: 'src-a', slug: 'a', title: 'A' },
			{ ...common, aliases: ['sourced'], html: 'source only', slug: 'sourced', title: 'Sourced' },
		])
		common.campaign = campaign;
		[a, b, c] = await Article.create([
			{ ...common, aliases: ['aa'], html: 'a', slug: 'a', title: 'A' },
			{ ...common, aliases: ['bb'], html: 'b', slug: 'b', title: 'B' },
			{ ...common, aliases: ['cc'], html: 'c', slug: 'c', title: 'C' },
		])
	})

	describe('onSave', () => {
		test('uniques and sorts aliases/tags', async () => {
			await Article.deleteMany({})

			const article = await Article.create({
				aliases: ['b', 'b', 'c', 'a'],
				campaign,
				slug: 'slug',
				tags: ['b', 'b', 'c', 'a'],
				title: 'foo',
			})

			expect(article.toJSON().aliases).toEqual(['a', 'b', 'c'])
			expect(article.toJSON().tags).toEqual(['a', 'b', 'c'])

			article.aliases!.push('a')
			article.tags!.push('a')

			expect(article.toJSON().aliases).toEqual(['a', 'b', 'c', 'a'])
			expect(article.toJSON().tags).toEqual(['a', 'b', 'c', 'a'])

			await article.save()

			expect(article.toJSON().aliases).toEqual(['a', 'b', 'c'])
			expect(article.toJSON().tags).toEqual(['a', 'b', 'c'])
		})

		test('clears aliases from other articles', async () => {
			const NEW = await Article.create({
				aliases: ['aa', 'bb', 'cc'],
				campaign,
				slug: 'new',
				title: 'New',
			})

			const A = await Article.findOne({ slug: 'a' })
			const B = await Article.findOne({ slug: 'b' })
			const C = await Article.findOne({ slug: 'c' })
			expect(A!.toJSON().aliases).not.toContain('aa')
			expect(B!.toJSON().aliases).not.toContain('bb')
			expect(C!.toJSON().aliases).not.toContain('cc')
			expect(NEW.toJSON().aliases).toEqual(['aa', 'bb', 'cc'])
		})
	})

	test('enforces unique aliases onSave', async () => {
		expect(await Article.find({ aliases: 'aa' })).toHaveLength(1)
		expect(await Article.find({ aliases: 'bb' })).toHaveLength(1)
		expect(await Article.find({ aliases: 'cc' })).toHaveLength(1)

		const article = await new Article({
			aliases: ['aa', 'bb', 'cc'],
			campaign,
			html: `
        <a href="/a">A</a>
        <a href="/b">B</a>
        <a href="/e">E</a>
        <a href="/f">F</a>
      `,
			slug: 'd',
			title: 'D',
		}).save()

		expect(article.toJSON().aliases).toEqual(['aa', 'bb', 'cc'])
		const aa = await Article.find({ aliases: 'aa' })
		expect(aa).toHaveLength(1)
		expect(aa[0]).toReference(article)

		const bb = await Article.find({ aliases: 'bb' })
		expect(bb).toHaveLength(1)
		expect(bb[0]).toReference(article)

		const cc = await Article.find({ aliases: 'cc' })
		expect(cc).toHaveLength(1)
		expect(cc[0]).toReference(article)
	})

	test('.find().bySlug()', async () => {
		expect(await Article.find().bySlug('a')).toHaveLength(2) // source & child
		expect(await Article.find().bySlug('sourced')).toHaveLength(1)
		expect(await Article.find().bySlug(['a', 'b', 'c'])).toHaveLength(4)
		expect(await Article.find().bySlug(['c', 'missing'])).toHaveLength(1)
	})

	test('findByCampaignSlug(s)', async () => {
		expect((await Article.findByCampaignSlug('a', campaign))?.toJSON()).toEqual(a.toJSON())
		expect((await Article.findByCampaignSlug('missing', campaign))).toEqual(undefined)
		expect((await Article.findByCampaignSlugs(['a', 'b', 'c'], campaign)).map(m => m.toJSON()))
			.toEqual([a, b, c].map(m => m.toJSON()))
		expect((await Article.findByCampaignSlugs(['c', 'missing'], campaign)).map(m => m.toJSON()))
			.toEqual([c.toJSON()])
	})

	test('findLinkedArticles', async () => {
		a.set('html', `
			<a href="b">B</a>
			<a href="c">C</a>
			<a href="d">D</a>
			<include from="c" />
		`)

		const linkedArticles = await a.findLinkedArticles(campaign)
		expect(linkedArticles).toHaveLength(2)
		expect(linkedArticles[0]).toReference(b)
		expect(linkedArticles[1]).toReference(c)
	})

	test('converts toLink()', async () => {
		const article = await Article.findOne({ slug: 'a' })
		expect(await article?.toLink()).toMatchObject({
			id: getId(article),
			slug: article?.slug,
			subdomain: campaign.subdomain,
			title: article?.title,
			type: 'article',
		})
	})

	describe('sections', () => {
		test('extract cleanly into a map', async () => {
			const article = new Article({ html: `
				<div id="foo">Foo</div>
				<div id="bar">Bar</div>
				baz
			` })
			expect([...article.sections.entries()]).toEqual([
				['*', article.html],
				['foo', 'Foo'],
				['bar', 'Bar'],
			])
		})

		test('duplicate ids overwrite, so last takes precedence', async () => {
			const article = new Article({ html: `
				<div id="foo">First</div>
				<div id="foo">Second</div>
				baz
			` })
			expect([...article.sections.entries()]).toEqual([
				['*', article.html],
				['foo', 'Second'],
			])
		})
	})

	test('renders cleanly', async () => {
		a.set('html', `
			<h1>New!</h1>
			<a href="/a">A</a>
			<a href="/missing-link">Missing!</a>
			<include from="b" sections="*" />
			<include from="missing-include" sections="*" />
		`)

		expect(await a.render(campaign)).toMatchObject({
			aliases: ['aa'],
			campaign: { id: campaign.id },
			childArticles: [
				expect.objectContaining({ id: a.id, slug: 'a', type: 'article' }),
			],
			title: 'A',
		})
	})
})
