import mongoose from 'mongoose'
import Slug from './Slug'

const ArticleSchema = new mongoose.Schema({
  aliases: [{ ...Slug, ref: 'Article' }],
  campaign: { ref: 'Campaign', type: String, unique: false },
  createdBy: { ref: 'User', type: String },
  data: Object,
  editors: [{ ref: 'User', type: String }],
  lastUpdatedBy: { ref: 'User', type: String },
  slug: { ...Slug, required: true, unique: false },
  tags: [{ ...Slug, ref: 'Article' }],
  title: { required: true, type: String },
}, {
  timestamps: true,
  versionKey: 'version',
})

ArticleSchema.index({ campaign: 1, slug: 1 }, { unique: true })

export default mongoose.model('Article', ArticleSchema)
