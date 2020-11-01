import mongoose from 'mongoose'
import hash from 'object-hash'
import { Slug } from '@/server/models/Slug'

const { ObjectId: ObjectIdType } = mongoose.Schema.Types

export const MapSchema = new mongoose.Schema({
	campaign: {
		ref: 'Campaign', required: true, type: ObjectIdType, unique: false,
	},
	checksum: { default: '', type: String },
	data: { default: null, select: true, type: Object },
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
MapSchema.pre('save', function (next) {
	if (this.isModified('data')) {
		this.checksum = hash.sha1(this.data)
	}

	next()
})

export const Map = mongoose.model('Map', MapSchema)
