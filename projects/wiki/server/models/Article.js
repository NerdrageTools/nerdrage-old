import mongoose from 'mongoose'

const Slug = {
  match: [/^[a-z0-9_-]{1,}$/, 'Invalid Slug: only lowercase letters/numbers, _ and -'],
  trim: true,
  type: String,
}

export default mongoose.model('Article', new mongoose.Schema({
  _id: { ...Slug, alias: 'slug' },
  aliases: [{ ...Slug, ref: 'Article' }],
  campaign: { ref: 'Campaign', type: mongoose.Schema.Types.ObjectId },
  createdBy: { ref: 'User', type: mongoose.Schema.ObjectId },
  data: Object,
  editors: [{ ref: 'User', type: mongoose.Schema.ObjectId }],
  lastUpdatedBy: { ref: 'User', type: mongoose.Schema.ObjectId },
  tags: [{ ...Slug, ref: 'Article' }],
  title: { required: true, type: String },
}, {
  timestamps: true,
  versionKey: 'version',
}))
