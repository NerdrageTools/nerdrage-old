import mongoose from 'mongoose'
import { ICampaign } from '@/server/models/Campaign'
import { Slug } from '@/server/models/Slug'

const { ObjectId: ObjectIdType } = mongoose.Schema.Types

interface TSheet extends mongoose.Document {
	_id: string,
	campaign: ICampaign['_id'],
}

export const SheetSchema = new mongoose.Schema<TSheet>({
	campaign: {
		ref: 'Campaign',
		required: true,
		type: ObjectIdType,
		unique: false,
	},
	data: { default: {}, type: Object },
	layout: { default: {}, type: Object },
	ownedBy: { ref: 'User', type: ObjectIdType },
	secret: { default: true, type: Boolean },
	slug: { ...Slug, required: true, unique: false },
	template: { default: false, type: Boolean },
	title: { default: 'Unnamed Character', type: String },
}, {
	id: false,
	timestamps: true,
	toJSON: { virtuals: true },
	toObject: { virtuals: true },
	versionKey: 'version',
})

SheetSchema.index({ campaign: 1, slug: 1 }, { unique: true })

export const Sheet = mongoose.model('Sheet', SheetSchema)
