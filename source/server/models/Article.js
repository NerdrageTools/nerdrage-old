import url from 'url'
import cheerio from 'cheerio'
import mongoose from 'mongoose'
import Slug from '@/server/models/Slug'
import { extractUrlSlug } from '@/utilities/slugs/slugs'
import transclude from '@/utilities/transclude'
import unique from '@/utilities/unique/unique'

const { ObjectId: ObjectIdType } = mongoose.Schema.Types
const slugifyArray = array => unique(array.map(value => (
  value.toLowerCase().replace(/[^\w-_]/g, '-').replace(/-{2,}|^-|-$/g, '')
))).sort()

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
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: 'version',
})

ArticleSchema.index({ campaign: 1, slug: 1 }, { unique: true })
ArticleSchema.pre('save', function (next) {
  this.aliases = slugifyArray(this.aliases)
  this.tags = slugifyArray(this.tags)

  mongoose.models.Article.updateMany(
    { _id: { $ne: this._id } },
    { $pull: { aliases: { $in: this.aliases } } }
  ).then(() => next())
})

ArticleSchema.methods.renderLinks = async function () {
  const $ = cheerio.load(this.html || '', { decodeEntities: false, xmlMode: true })
  const links = []

  $('a').each((index, element) => {
    const $link = $(element)
    const href = $link.attr('href') || ''
    const slug = extractUrlSlug(href)
    const parsedUrl = url.parse(href)

    const isInternal = !parsedUrl.hostname
    if (isInternal) {
      if (slug.match(/\.(gif|jpg|png)$/)) {
        $link.attr('href', `/media/${slug}`)
      } else {
        $link.attr('href', `/page/${slug}`)
      }
      links.push(slug)
    } else {
      $link.attr('target', '_new').addClass('external')
    }
  })

  this.html = $.html()
  return Promise.resolve(unique(links).sort())
}

ArticleSchema.methods.renderMissing = async function () {
  const $ = cheerio.load(this.html || '', { decodeEntities: false, xmlMode: true })
  const links = await this.renderLinks()
  const linked = await this.db.model('Article')
    .find({ $or: [{ slug: { $in: links } }, { aliases: { $in: links } }] })
    .select('slug aliases')
    .exec()

  const foundLinks = linked.reduce((all, { aliases, slug }) => ([...all, slug, ...aliases]), [])
  const missing = links.filter(link => !foundLinks.includes(link))

  $('a').each((index, element) => {
    const $link = $(element)
    const href = $link.attr('href') || ''
    const slug = extractUrlSlug(href)
    if (missing.includes(slug)) {
      $link.addClass('missing')
    }
  })

  this.html = $.html()
  return unique(missing).sort()
}

ArticleSchema.methods.render = async function () {
  return Promise.all([
    transclude(this.html),
    this.renderLinks(),
    this.renderMissing(),
  ]).then(([transcluded, links, missing]) => ({
    ...this.toJSON(),
    html: transcluded.html,
    links: unique([...transcluded.links, ...links]).sort(),
    missing: unique([...transcluded.missing, ...missing]).sort(),
  }))
}

ArticleSchema.pre('save', function () { this.compute() })

const Article = mongoose.model('Article', ArticleSchema)

export default Article
