import cheerio from 'cheerio'
import entities from 'entities'
import { html_beautify as beautify } from 'js-beautify'
import mongoose from 'mongoose'
import Slug from '@/server/models/Slug'
import computeSearchKeys from '@/utilities/computeSearchKeys'
import createCampaignFilter from '@/utilities/createCampaignFilter'
import transclude from '@/utilities/transclude'
import unique from '@/utilities/unique'
import renderLinks from './Article/renderLinks'
import cleanUp from './Article/cleanUp'

const { ObjectId: ObjectIdType } = mongoose.Schema.Types
const slugifyArray = array => unique(array.map(value => (
	value.toLowerCase().replace(/[^\w-_]/g, '-').replace(/-{2,}|^-|-$/g, '')
))).sort()
const BEAUTIFY_OPTIONS = {
	end_with_newline: true,
	indent_char: ' ',
	indent_size: 2,
	preserve_newlines: false,
	wrap_line_length: 0,
}

export const ArticleSchema = new mongoose.Schema({
	aliases: [Slug],
	campaign: { default: null, ref: 'Campaign', required: false, type: ObjectIdType, unique: false },
	createdBy: { ref: 'User', type: ObjectIdType },
	data: Object,
	html: { default: '', type: String },
	lastUpdatedBy: { ref: 'User', type: ObjectIdType },
	plainText: { default: '', select: false, type: String },
	searchKeys: { select: false, type: [String] },
	secret: { default: false, type: Boolean },
	slug: { ...Slug, required: true, unique: false },
	tags: [Slug],
	template: { default: false, type: Boolean },
	title: { required: true, type: String },
}, {
	id: false,
	timestamps: true,
	toJSON: {
		transform(_, returnValue) {
			/* eslint-disable no-param-reassign */
			delete returnValue.plainText
			delete returnValue.searchKeys
			/* eslint-enable no-param-reassign */
		},
		virtuals: true,
	},
	toObject: { virtuals: true },
	versionKey: 'version',
})

ArticleSchema.index({ campaign: 1, slug: 1 }, { unique: true })
ArticleSchema.index({ plainText: 'text', title: 'text' })
ArticleSchema.index({ searchKeys: 1 })
ArticleSchema.pre('save', function (next) {
	this.aliases = slugifyArray(this.aliases)
	this.html = beautify(cleanUp(this.html), BEAUTIFY_OPTIONS)
	this.tags = slugifyArray(this.tags)

	const $ = cheerio.load(this.html, { decodeEntities: false, xmlMode: true })
	$('br').replaceWith('\r\n')
	this.plainText = entities.decodeHTML($.text().replace(/[\r\n]/g, ' ').replace(/\s+/g, ' '))
	this.searchKeys = computeSearchKeys(this.plainText)

	mongoose.models.Article.updateMany(
		{ _id: { $ne: this._id }, campaign: this.campaign },
		{ $pull: { aliases: { $in: this.aliases } } },
	).then(() => next())
})

ArticleSchema.methods.render = async function (campaign) {
	const campaignFilter = createCampaignFilter(campaign)
	const includes = await transclude(this.html, campaignFilter)
	const links = await renderLinks(includes.html, campaignFilter)
	const childArticles = await mongoose.models.Article
		.aggregate([
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
		])
		.exec()

	const html = beautify(links.html, BEAUTIFY_OPTIONS)

	return Promise.resolve({
		...this.toJSON(),
		childArticles,
		html,
	})
}

const Article = mongoose.model('Article', ArticleSchema)

export default Article
