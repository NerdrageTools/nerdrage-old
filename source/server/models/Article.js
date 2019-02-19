import mongoose from 'mongoose'
import Slug from './Slug'

const { ObjectId: ObjectIdType } = mongoose.Schema.Types

const ArticleSchema = new mongoose.Schema({
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

export default mongoose.model('Article', ArticleSchema)
