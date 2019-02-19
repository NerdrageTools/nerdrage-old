import mongoose from 'mongoose'
import Slug from './Slug'

const { ObjectId } = mongoose.Types.ObjectId
const { ObjectId: ObjectIdType } = mongoose.Schema.Types

const ColorCode = {
  match: [/^#[0-9a-f]{3,6}/i, 'Invalid color code'],
  trim: true,
  type: String,
}
const NavigationSchema = new mongoose.Schema({
  slug: { ...Slug, ref: 'Article' },
  title: { trim: true, type: String },
})
NavigationSchema.add({ children: NavigationSchema })

const CampaignSchema = new mongoose.Schema({
  createdBy: { ref: 'User', type: ObjectIdType },
  domain: { ...Slug, required: true, unique: true },
  editors: [{ ref: 'User', type: ObjectIdType }],
  lastUpdatedBy: { ref: 'User', type: ObjectIdType },
  name: { default: 'New Campaign', trim: true, type: String },
  navigation: {
    default: [{ slug: 'home', text: 'Home' }],
    type: [NavigationSchema],
  },
  owners: [{ ref: 'User', type: ObjectIdType }],
  players: [{ ref: 'User', type: ObjectIdType }],
  private: { default: false, type: Boolean },
  theme: {
    default: {},
    type: {
      background: ColorCode,
      fontFamily: String,
      foreground: ColorCode,
      primary: ColorCode,
      secondary: ColorCode,
    },
  },
}, {
  timestamps: true,
  versionKey: 'version',
})

const matchObjectId = id => vs => vs.equals(ObjectId(id))

CampaignSchema.methods.isEditableBy = function isEditableBy(userId) {
  const matches = matchObjectId(userId)
  return Boolean(
    this.owners.some(matches)
    || this.editors.some(matches)
  )
}

CampaignSchema.methods.isOwnedBy = function isOwnedBy(userId) {
  const matches = matchObjectId(userId)
  return Boolean(this.owners.some(matches))
}

CampaignSchema.methods.isVisibleTo = function isVisibleTo(userId) {
  const matches = matchObjectId(userId)
  if (!this.private) return true

  return Boolean(
    this.owners.some(matches)
      || this.editors.some(matches)
      || this.players.some(matches)
  )
}

export default mongoose.model('Campaign', CampaignSchema)
