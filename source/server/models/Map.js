import mongoose from 'mongoose'
import Slug from '@/server/models/Slug'

const { ObjectId: ObjectIdType } = mongoose.Schema.Types

export const MapSchema = new mongoose.Schema({
  campaign: { ref: 'Campaign', required: true, type: ObjectIdType, unique: false },
  data: { default: null, type: Object },
  secret: { default: false, type: Boolean },
  slug: { ...Slug, required: true, unique: false },
  title: { default: 'Unnamed Map', type: String },
}, {
  id: false,
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: 'version',
})

MapSchema.index({ campaign: 1, slug: 1 }, { unique: true })

const Map = mongoose.model('Map', MapSchema)

export default Map
