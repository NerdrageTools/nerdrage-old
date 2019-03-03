import { html_beautify as beautify } from 'js-beautify'
import mongoose from 'mongoose'
import cleanUp from './Article/cleanUp'
import renderLinks from './Article/renderLinks'
import Slug from '@/server/models/Slug'
import transclude from '@/utilities/transclude'
import unique from '@/utilities/unique'

const { ObjectId: ObjectIdType } = mongoose.Schema.Types
const slugifyArray = array => unique(array.map(value => (
  value.toLowerCase().replace(/[^\w-_]/g, '-').replace(/-{2,}|^-|-$/g, '')
))).sort()
const BEAUTIFY_OPTIONS = {
  end_with_newline: true,
  indent_size: 2,
  indent_char: ' ',
  preserve_newlines: false,
  wrap_line_length: 0,
}

export const ArticleSchema = new mongoose.Schema({
  aliases: [Slug],
  campaign: { default: null, ref: 'Campaign', required: false, type: ObjectIdType, unique: false },
  createdBy: { ref: 'User', type: String },
  data: Object,
  html: { default: '', type: String },
  lastUpdatedBy: { ref: 'User', type: String },
  slug: { ...Slug, required: true, unique: false },
  tags: [Slug],
  title: { required: true, type: String },
}, {
  id: false,
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: 'version',
})

ArticleSchema.index({ campaign: 1, slug: 1 }, { unique: true })
ArticleSchema.pre('save', function (next) {
  this.aliases = slugifyArray(this.aliases)
  this.html = beautify(cleanUp(this.html), BEAUTIFY_OPTIONS)
  this.tags = slugifyArray(this.tags)

  mongoose.models.Article.updateMany(
    { _id: { $ne: this._id }, campaign: this.campaign },
    { $pull: { aliases: { $in: this.aliases } } }
  ).then(() => next())
})

ArticleSchema.methods.render = async function () {
  const links = await renderLinks(this.html, this.campaign)
  const includes = await transclude(links.html)

  const html = beautify(includes.html, BEAUTIFY_OPTIONS)

  return Promise.resolve({
    ...this.toJSON(),
    html,
    links: unique([...links.links, ...includes.links]).sort(),
    missing: unique([...links.missing, ...includes.missing]).sort(),
  })
}

ArticleSchema.statics.locate = function (slug, campaignId) {
  return this.findOne({
    /* eslint-disable sort-keys */
    $and: [
      { $or: [{ campaign: campaignId }, { campaign: null }] },
      { $or: [{ aliases: slug }, { slug }] },
    ],
  /* eslint-ensable sort-keys */
  }).sort({ campaign: -1 })
}

const Article = mongoose.model('Article', ArticleSchema)

export default Article
