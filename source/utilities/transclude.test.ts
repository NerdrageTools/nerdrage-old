import { Campaign, Campaigns } from '~/server/models'
import { Article } from '~/server/models/Article'
import { transclude } from '~/utilities/transclude'

process.env.TEST_SUITE = 'transclude'

/* eslint-disable max-len,sort-keys */
describe('utilities/transclude', () => {
	let deepSource: Campaign
	let source: Campaign
	let current: Campaign

	beforeEach(async () => {
		deepSource = await Campaigns.create({ subdomain: 'deep-source' })
		await Article.create([
			{ slug: 'a', html: 'Deep-Source A' },
			{ slug: 'b', html: 'Deep-Source B' },
			{ slug: 'deep', html: 'Deep-Source Deep' },
		].map(a => ({ ...a, campaign: deepSource, title: a.slug })))

		source = await Campaigns.create({ subdomain: 'source', sources: [deepSource] })
		await Article.create([
			{ slug: 'a', html: 'Source A' },
			{ slug: 'shallow', html: 'Source Shallow' },
		].map(a => ({ ...a, campaign: source, title: a.slug })))

		current = await Campaigns.create({ subdomain: 'current', sources: [source] })
		await Article.create([
			{ slug: 'a', html: 'Immediate A' },
			{ slug: 'b', html: 'Nope! <div id="simple">Bug!</div>' },
			{ slug: 'c', html: `
				Nope!
				<div id="simple">Foo</div>
				<div id="nested">
					Bar
					<include sections="simple" from="b" />
				</div>
			`,
			},
		].map(a => ({
			...a,
			aliases: [a.slug.repeat(2), a.slug.repeat(3)],
			campaign: current,
			title: a.slug,
		})))
	})

	test('no transcludes', async () => {
		expect(await transclude(current, 'No Includes')).toEqual('No Includes')
	})

	test('missing article', async () => {
		expect(await transclude(current.toJSON(), '<include from="non-existant" sections="*" />'))
			.toEqual('')
	})

	test('simple transclude', async () => {
		expect(await transclude(current, '<include from="a" sections="*" />'))
			.toEqual('')
	})

	test.skip('transcludes', async () => {
		await Article.deleteMany({ slug: { $in: ['a', 'b', 'c'] } })
		await Article.create([
			/* eslint-disable sort-keys */
			{ slug: 'a', title: 'Ant', html: 'Ant!' },
			{ slug: 'b', title: 'Bug', html: 'Nope! <div id="simple">Bug!</div>' },
			{
				aliases: ['cat'], slug: 'c', title: 'Cat', html: `
        Nope!
        <div id="simple">Foo</div>
        <div id="nested">
          Bar
          <include sections="simple" from="b" />
        </div>
      `,
			},
			/* eslint-enable sort-keys */
		])

		const html = `
      <h3>Title</h3>
      <include sections="*" from="a" />
      <include sections="simple" from="b" />
      <include sections="simple,nested" from="c" />
      <include sections="simple,nested" from="cat" />
      <include sections="*" from="d" />
      <include sections="missing,missing-2" from="e" />
    `

		const transcluded = await transclude(html)
		expect(transcluded.links).toEqual(['a', 'b', 'c', 'cat', 'd', 'e'])
		expect(transcluded.missing).toEqual(['d', 'e'])
		expect(transcluded.html).toMatchSnapshot()

		done()
	})
})
