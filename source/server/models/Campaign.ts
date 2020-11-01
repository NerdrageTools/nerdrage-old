import mongoose from 'mongoose'
// import { IArticle } from '@/server/models/Article'
// import { IMap } from '@/server/models/Map'
// import { ISheet } from '@/server/models/Sheet'
import { IUser } from '@/server/models/User'
import { defaultTheme, ITheme } from '@/data/Theme'
import { unique } from '@/utilities/unique'
import { Slug } from './Slug'

interface INavigation<T extends mongoose.Document = mongoose.Document> {
	children: INavigation[],
	slug: T['_id'],
	title: string,
}

const NavigationSchema = new mongoose.Schema({
	slug: { ...Slug, ref: 'Article' },
	title: { trim: true, type: String },
})
NavigationSchema.add({ children: NavigationSchema })

export interface ICampaignJSON {
	createdBy: IUser['_id'],
	editors: IUser['_id'][],
	lastUpdatedBy: IUser['_id'],
	navigation: INavigation[],
	owners: IUser['_id'][],
	players: IUser['_id'][],
	secret: boolean,
	sources: ICampaign['_id'][],
	subdomain: string,
	theme: ITheme,
	title: string,
}

export interface ICampaign extends mongoose.Document, ICampaignJSON {
	isEditableBy: (id: string) => boolean,
	isOwnedBy: (id: string) => boolean,
	isParticipant: (id: string) => boolean,
	isVisibleTo: (id: string) => boolean,
}

const userSorter = (userA: IUser, userB: IUser) => {
	const a = userA.name || userA.username
	const b = userB.name || userB.username
	return (a).localeCompare(b)
}

const ColorCode = {
	match: [/^#[0-9a-f]{3,6}/i, 'Invalid color code'],
	trim: true,
	type: String,
}

const Schema = new mongoose.Schema<ICampaign>({
	createdBy: { ref: 'User', type: mongoose.Schema.Types.ObjectId },
	editors: [{ ref: 'User', type: mongoose.Schema.Types.ObjectId }],
	lastUpdatedBy: { ref: 'User', type: mongoose.Schema.Types.ObjectId },
	navigation: {
		default: [{ slug: 'home', text: 'Home' }],
		type: [NavigationSchema],
	},
	owners: [{ ref: 'User', type: mongoose.Schema.Types.ObjectId }],
	players: [{ ref: 'User', type: mongoose.Schema.Types.ObjectId }],
	secret: { default: false, type: Boolean },
	sources: [{ ref: 'Campaign', type: mongoose.Schema.Types.ObjectId }],
	subdomain: { ...Slug, required: true, unique: true },
	theme: {
		default: defaultTheme,
		type: {
			background: { ...ColorCode, default: defaultTheme.background },
			fontFamily: { default: defaultTheme.fontFamily, type: String },
			normalText: { ...ColorCode, default: defaultTheme.normalText },
			primary: { ...ColorCode, default: defaultTheme.primary },
			primaryText: { ...ColorCode, default: defaultTheme.primaryText },
		},
	},
	title: { default: 'New Campaign', trim: true, type: String },
}, {
	id: false,
	timestamps: true,
	toJSON: {
		transform(_, returnValue: ICampaign) {
			if (returnValue.editors) returnValue.editors.sort(userSorter)
			if (returnValue.owners) returnValue.owners.sort(userSorter)
			if (returnValue.players) returnValue.players.sort(userSorter)
		},
	},
	versionKey: 'version',
})

const matchObjectId = (id: string) => (vs: mongoose.Document) => (
	mongoose.Types.ObjectId(id).equals(vs._id || vs)
)

Schema.pre<ICampaign>('save', function () {
	this.subdomain = this.subdomain.toLowerCase()
	if (this.sources && this.sources.length) {
		this.sources = unique(this.sources)
	}
})

Schema.methods.isEditableBy = function (userId) {
	const matches = matchObjectId(userId)
	return Boolean(
		this.owners.some(matches)
    || this.editors.some(matches),
	)
}

Schema.methods.isOwnedBy = function (userId) {
	const matches = matchObjectId(userId)
	return Boolean(this.owners.some(matches))
}

Schema.methods.isVisibleTo = function (userId) {
	if (!this.secret) return true

	const matches = matchObjectId(userId)
	return Boolean(
		this.owners.some(matches)
    || this.editors.some(matches)
    || this.players.some(matches),
	)
}

Schema.methods.isParticipant = function (userId) {
	const matches = matchObjectId(userId)
	return Boolean(
		this.owners.some(matches)
    || this.editors.some(matches)
    || this.players.some(matches),
	)
}

export const Campaign = mongoose.model<ICampaign>('Campaign', Schema)
