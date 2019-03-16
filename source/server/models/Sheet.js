import mongoose from 'mongoose'
import Slug from '@/server/models/Slug'

const { ObjectId: ObjectIdType } = mongoose.Schema.Types

export const SheetSchema = new mongoose.Schema({
  campaign: { ref: 'Campaign', required: true, type: ObjectIdType, unique: false },
  data: { default: {}, type: Object },
  layout: { default: {}, type: Object },
  ownedBy: { ref: 'User', type: ObjectIdType },
  public: { default: false, type: Boolean },
  slug: { ...Slug, required: true, unique: false },
  title: { default: 'Unnamed Character', type: String },
}, {
  id: false,
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: 'version',
})

SheetSchema.index({ campaign: 1, slug: 1 }, { unique: true })

const Sheet = mongoose.model('Sheet', SheetSchema)

export default Sheet
