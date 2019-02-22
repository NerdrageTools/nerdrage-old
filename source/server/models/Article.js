import mongoose from 'mongoose'
import Slug from '@/server/models/Slug'
import unique from '@/utilities/unique/unique'

const { ObjectId: ObjectIdType } = mongoose.Schema.Types

export const ArticleSchema = new mongoose.Schema({
  aliases: [Slug],
  campaign: { default: null, ref: 'Campaign', required: false, type: ObjectIdType, unique: false },
  createdBy: { ref: 'User', type: String },
  data: Object,
  lastUpdatedBy: { ref: 'User', type: String },
  slug: { ...Slug, required: true, unique: false },
  tags: [Slug],
  title: { required: true, type: String },
}, {
  timestamps: true,
  versionKey: 'version',
})

ArticleSchema.index({ campaign: 1, slug: 1 }, { unique: true })

const slugifyArray = array => unique(array.map(value => (
  value.toLowerCase().replace(/[^\w-_]/g, '-').replace(/-{2,}|^-|-$/g, '')
))).sort()

ArticleSchema.pre('save', function (next) {
  this.aliases = slugifyArray(this.aliases)
  this.tags = slugifyArray(this.tags)

  mongoose.models.Article.updateMany(
    { _id: { $ne: this._id } },
    { $pull: { aliases: { $in: this.aliases } } }
  ).then(() => next())
})

const Article = mongoose.model('Article', ArticleSchema)

export default Article
