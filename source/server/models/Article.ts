import {
	getModelForClass, index, modelOptions, pre, prop, Ref, ReturnModelType, Severity,
} from '@typegoose/typegoose'
import cheerio from 'cheerio'
import * as entities from 'entities'
import { html_beautify as beautify } from 'js-beautify'
import deburr from 'lodash.deburr'
import { Slug } from '~/server/models/Slug'
import { createCampaignFilter } from '~/utilities/createCampaignFilter'
import { transclude } from '~/utilities/transclude'
import { unique } from '~/utilities/unique'
import { cleanUp } from '~/server/models/Article/cleanUp'
import { renderLinks } from '~/server/models/Article/renderLinks'
import { Campaign } from './Campaign'
import { User, Users } from './User'
import { loadByCampaign } from '../utilities/loadByCampaign'
import { bound } from '~/utilities/bound'

const slugifyArray = (array: string[]) => unique(array.map(value => (
	value.toLowerCase().replace(/[^\w-_]/g, '-').replace(/-{2,}|^-|-$/g, '')
))).sort()
const BEAUTIFY_OPTIONS = {
	end_with_newline: true,
	indent_char: ' ',
	indent_size: 2,
	preserve_newlines: false,
	wrap_line_length: 0,
}

export interface IArticleData {
	_id?: string,
	aliases?: string[],
	campaign: Ref<typeof Campaign>,
	createdAt?: Date,
	createdBy?: Ref<User>,
	html?: string,
	lastUpdatedBy?: Ref<User>,
	plainText?: string,
	secret?: boolean,
	slug: string,
	tags?: string[],
	template?: boolean,
	title: string,
	updatedAt?: Date,
	version?: number,
}
export interface IArticleLink {
	slug: string,
	subdomain: string,
	title: string,
}

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

@index({ campaign: 1, slug: 1 }, { unique: true })
@index({ plainText: 'text', title: 'text' })
@modelOptions({
	options: { allowMixed: Severity.ALLOW },
	schemaOptions: { id: false, timestamps: true, versionKey: 'version' },
})
@pre<Article>('save', async function (next) {
	this.aliases = slugifyArray(this.aliases)
	this.html = beautify(cleanUp(this.html), BEAUTIFY_OPTIONS)
	this.tags = slugifyArray(this.tags)

	const $ = cheerio.load(this.html, { decodeEntities: false, xmlMode: true })
	$('br').replaceWith('\r\n')
	// @ts-expect-error - .text() is perfectly valid on Root
	this.plainText = entities.decodeHTML($.text().replace(/[\r\n]/g, ' ').replace(/\s+/g, ' '))

	await Articles.updateMany(
		{ _id: { $ne: this._id }, campaign: this.campaign },
		{ $pull: { aliases: { $in: this.aliases } } },
	)
	next()
})
export class Article implements IArticleData {
	_id?: string
	createdAt?: Date
	updatedAt?: Date
	version?: number

	@prop({ default: [], type: [String] })
	public aliases: string[] = []

	@prop({ default: null, ref: 'Campaign' })
	public campaign: Ref<typeof Campaign>

	@prop({ ref: 'User' })
	public createdBy?: Ref<User>

	@prop({ default: '' })
	public html: string = ''

	@prop({ ref: 'User' })
	public lastUpdatedBy?: Ref<User>

	@prop({ default: '' })
	public plainText: string = ''

	@prop({ default: false })
	public secret: boolean = false

	@prop({ ...Slug, required: true })
	public slug: string = ''

	@prop({ default: [], type: [String] })
	public tags: string[] = []

	@prop({ default: false })
	public template: boolean = false

	@prop({ required: true })
	public title: string = ''

	async render(campaign?: ICampaign): Promise<Article> {
		const campaignFilter = createCampaignFilter(campaign)
		const includes = await transclude(this.html, campaignFilter)
		const links = await renderLinks(includes.html, campaignFilter)
		const childArticles = await Articles.aggregate([
			{ $match: {
				$and: [campaignFilter, { tags: { $in: [this.slug, ...this.aliases] } }],
				template: false,
			} },
			{ $group: {
				_id: '$slug',
				id: { $first: '$_id' },
				slug: { $first: '$slug' },
				title: { $first: '$title' },
			} },
			{ $project: { _id: '$id', slug: '$slug', title: '$title' } },
		]).exec()

		const html = beautify(links.html, BEAUTIFY_OPTIONS)
		return Promise.resolve({ ...this.toJSON(), childArticles, html })
	}
}

const search = async (
	searchTerm: string | RegExp,
	subdomain: string,
	userId: string = '',
	limit: number = 10,
): Promise<IArticleSearchResult[] | null> => {
	const campaign = subdomain ? await Campaign.findOne({ subdomain }) : null
	if (!campaign) return null

	const user = userId ? await Users.findOne({ _id: userId }) : null
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
interface IArticles extends ReturnModelType<typeof Article> {
	search: typeof search,
}
export const Articles: IArticles = Object.assign(getModelForClass(Article), {
	search,
})
