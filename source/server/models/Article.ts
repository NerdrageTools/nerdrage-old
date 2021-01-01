/* eslint-disable max-classes-per-file */
import {
	DocumentType, getClassForDocument, getModelForClass, index, modelOptions, pre, prop, queryMethod, Severity,
} from '@typegoose/typegoose'
import { QueryMethod, ReturnModelType } from '@typegoose/typegoose/lib/types'
import cheerio from 'cheerio'
import * as entities from 'entities'
import { html_beautify as beautify } from 'js-beautify'
import deburr from 'lodash.deburr'
import { cleanUp } from '~/server/models/Article/cleanUp'
import { Campaigns, ICampaignData, ICampaignLink } from '~/server/models/Campaign'
import {
	CampaignDocumentBase, CampaignHelpers, ICampaignDocumentBaseData, ICampaignDocumentBaseLink,
} from '~/server/models/CampaignDocumentBase'
import { bound } from '~/utilities/bound'
import { pluck } from '~/utilities/pluck'
import { transclude } from '~/utilities/transclude'
import { unique } from '~/utilities/unique'
import { IUserLink, Users } from './User'
import { loadByCampaign } from '../utilities/loadByCampaign'

const slugifyArray = (array: string[]): string[] => (
	unique<string>(array.map(value => (
		value.toLowerCase().replace(/[^\w-_]/g, '-').replace(/-{2,}|^-|-$/g, '')
	))).sort()
)
const BEAUTIFY_OPTIONS = {
	end_with_newline: true,
	indent_char: ' ',
	indent_size: 2,
	preserve_newlines: false,
	wrap_line_length: 0,
}

export interface IArticleData extends ICampaignDocumentBaseData {
	aliases?: string[],
	html?: string,
	plainText?: string,
	secret?: boolean,
	tags?: string[],
	template?: boolean,
}
export type IArticleLink = ICampaignDocumentBaseLink

interface ITextMatch {
	idx: number,
	match: string,
}
interface IArticleResult extends IArticleSearchResult {
	nameMatches: ITextMatch[],
	plainText: string,
	textMatches: ITextMatch[],
}
export interface IArticleSearchResult {
	nameHits: number,
	preview: string[],
	secret: boolean,
	slug: string,
	subdomain: string,
	textHits: number,
	title: string,
}

export interface IArticleRendered
	extends Omit<IArticleData, 'campaign' | 'createdBy' | 'lastUpdatedBy' | 'plainText'> {
	campaign: ICampaignLink,
	childArticles: IArticleLink[],
	createdBy: IUserLink,
	lastUpdatedBy: IUserLink,
}

export interface ArticleHelpers extends CampaignHelpers {
	bySlug: QueryMethod<typeof bySlug>,
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function bySlug(
	this: ReturnModelType<{ new (...data: any): IArticleData }, ArticleHelpers>,
	slug: string | string[],
) {
	return Array.isArray(slug)
		? this.find({ $or: [{ slug: { $in: slug } }, { aliases: { $in: slug } }] })
		: this.find({ $or: [{ slug }, { aliases: slug }] })
}

@index({ campaign: 1, slug: 1 }, { unique: true })
@index({ plainText: 'text', title: 'text' })
@modelOptions({
	options: { allowMixed: Severity.ALLOW },
	schemaOptions: { id: false, timestamps: true, versionKey: 'version' },
})
@pre<ArticleClass>('save', async function (next) {
	this.aliases = slugifyArray(this.aliases ?? [])
	this.html = beautify(cleanUp(this.html), BEAUTIFY_OPTIONS)
	this.tags = slugifyArray(this.tags ?? [])

	const $ = cheerio.load(this.html, { decodeEntities: false, xmlMode: true })
	$('br').replaceWith('\r\n')
	// @ts-expect-error - .text() is perfectly valid on Root
	this.plainText = entities.decodeHTML($.text().replace(/[\r\n]/g, ' ').replace(/\s+/g, ' '))

	await Article.updateMany(
		{ campaign: this.campaign, id: { $ne: this.id } },
		{ $pull: { aliases: { $in: this.aliases } } },
	)
	next()
})
@queryMethod(bySlug)
export class ArticleClass extends CampaignDocumentBase<IArticleData> {
	@prop({ default: [], type: [String] })
	public aliases?: string[] = []

	@prop({ default: '' })
	public html?: string = ''

	@prop({ default: '' })
	public plainText?: string = ''

	@prop({ default: false })
	public secret?: boolean = false

	@prop({ default: [], type: [String] })
	public tags?: string[] = []

	@prop({ default: false })
	public template?: boolean = false

	handlePreValidate(): void {
		super.handlePreValidate()
		this.aliases = unique<string>(this.aliases ?? []).sort()
		this.tags = unique<string>(this.tags ?? []).sort()
	}

	async findLinkedArticles(campaign: ICampaignData, html?: string)
		: Promise<DocumentType<ArticleClass>[]> {
		const $ = cheerio.load(html ?? this.html ?? '', { decodeEntities: false, xmlMode: true })
		const articles = unique<string>([
			...$('a').toArray().map(el => (el.attribs.href ?? '')),
			...$('include').toArray().map(el => (el.attribs.from)),
		])

		return Article.find()
			.byCampaign([campaign.id, ...(campaign.sources ?? [])])
			.find({ $or: [{ slug: { $in: articles } }, { aliases: { $in: articles } }] })
			.exec()
	}

	get parser(): cheerio.Root {
		return cheerio.load(this.html!, { decodeEntities: false, xmlMode: true })
	}

	get sections(): Map<string, string> {
		if (!this.html) return new Map<string, string>()

		const { parser } = this
		return parser('[id]').toArray().reduce((map, el) => {
			const $el = parser(el)
			const id = $el.attr('id')
			return id ? map.set(id, $el.html() ?? '') : map
		}, new Map<string, string>().set('*', this.html))
	}

	async render(campaign: ICampaignData): Promise<IArticleRendered> {
		const articles = await this.findLinkedArticles(campaign)
		const includes = transclude(campaign, this?.html ?? '', this.sections)
		const links = includes // await renderLinks(includes.html, campaignFilter)
		const childArticles = (
			await Article.find()
				.bySlug(this.slug)
				.byCampaign([campaign.id!, ...(campaign.sources ?? [])])
				.exec()
		).map<IArticleLink>(article => ({
			...pluck(article, 'id', 'slug', 'title'),
			subdomain: campaign.subdomain!,
			type: 'article',
		}))
		// const childArticles = await Articles.aggregate([
		// 	{ $match: {
		// 		$and: [campaignFilter, { tags: { $in: [this.slug, ...this.aliases ?? []] } }],
		// 		template: false,
		// 	} },
		// 	{ $group: {
		// 		_id: '$slug',
		// 		id: { $first: '$id' },
		// 		slug: { $first: '$slug' },
		// 		title: { $first: '$title' },
		// 	} },
		// 	{ $project: { id: '$id', slug: '$slug', title: '$title' } },
		// ]).exec()

		const html = beautify(links.html, BEAUTIFY_OPTIONS)
		return {
			aliases: [...this.aliases ?? []],
			...pluck(this,
				'id', 'createdAt', 'lastUpdatedAt', 'secret', 'slug',
				'template', 'title', 'version',
			),
			campaign: pluck(campaign, 'id', 'subdomain', 'title'),
			childArticles,
			html,
			tags: [...this.tags ?? []],
		}
	}
}

const findByCampaignSlug = async (slug: string, campaign: ICampaignData) => (
	(await findByCampaignSlugs([slug], campaign)).shift()
)
const findByCampaignSlugs = async (slug: string[], campaign: ICampaignData) => (
	Article.find().bySlug(slug).byCampaign([campaign.id, ...(campaign.sources ?? [])])
		.exec() as Promise<DocumentType<IArticleData>[]>
)
const search = async (
	searchTerm: string | RegExp,
	subdomain: string,
	userId: string = '',
	limit: number = 10,
): Promise<IArticleSearchResult[] | null> => {
	const campaign = subdomain ? await Campaigns.findOne({ subdomain }) : null
	if (!campaign) return null

	const user = userId ? await Users.findOne({ id: userId }) : null
	const userIsViewer = Boolean(user?.isAdmin || campaign.isVisibleTo(userId))
	if (!userIsViewer) return null

	const userIsOwner = Boolean(user?.isAdmin || campaign.isOwnedBy(userId))

	let regex: RegExp
	if (typeof searchTerm === 'string') {
		const words = deburr(entities.decodeHTML(searchTerm ?? ''))
			.split(/\b/)
			.map(word => word.trim()).filter(Boolean)
		regex = new RegExp(`(?<match>${words.join('|')})`, 'gim')
	} else {
		regex = searchTerm
	}
	const projection = { campaign: 1, plainText: 1, secret: 1, slug: 1, template: 1, title: 1 }
	const articles = await loadByCampaign<IArticleResult>('Article', campaign, {
		aggregation: [
			{ $project: {
				...projection,
				slugMatches: { $regexFindAll: { input: '$slug', regex } },
				textMatches: { $regexFindAll: { input: '$plainText', regex } },
				titleMatches: { $regexFindAll: { input: '$title', regex } },
			} },
			{ $addFields: { aliasMatches: { $regexFindAll: { input: '$aliases', regex } } } },
			{ $project: {
				...projection,
				// eslint-disable-next-line max-len
				nameHits: { $size: { $concatArrays: ['$slugMatches', '$aliasMatches', '$titleMatches'] } },
				nameMatches: { $concatArrays: ['$slugMatches', '$aliasMatches', '$titleMatches'] },
				textHits: { $size: '$textMatches' },
				textMatches: 1,
			} },
			{ $match: {
				$or: [{ nameHits: { $gt: 0 } }, { textHits: { $gt: 0 } }],
				...(!userIsOwner ? { secret: false } : {}),
			} },
			{ $sort: { nameHits: -1, textHits: -1 } },
			{ $limit: bound(limit, { min: 0 }) },
		],
		castAsModel: false,
	})

	return articles.map<IArticleSearchResult>(
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		({ nameMatches, plainText, textMatches, ...article }) => ({
			...article,
			preview: textMatches.map(({ idx, match }: ITextMatch) => [
				`...${plainText.substr(idx - 25, 25)}`,
				`<span class="highlight">${match}</span>`,
				`${plainText.substr(idx + match.length, 25)}`,
			].join('')),
		}),
	)
}

export const Article = Object.assign(
	getModelForClass<typeof ArticleClass, ArticleHelpers>(ArticleClass),
	{ findByCampaignSlug, findByCampaignSlugs, search },
)
