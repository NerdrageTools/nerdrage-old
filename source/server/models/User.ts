import {
	getModelForClass, index, modelOptions, pre, prop, ReturnModelType, Severity,
} from '@typegoose/typegoose'
import bcrypt from 'bcrypt'
import { REGEX, MESSAGES } from '~/utilities/CONSTANTS'
import { IArticleLink } from '../schema/IArticle'
import { ICampaignLink } from '../schema/ICampaign'
import { Campaign } from './Campaign'
import { loadByCampaign } from '../utilities/loadByCampaign'
import { ISheetLink, Sheet } from './Sheet'

export interface IUserData {
	_id?: string,
	createdAt?: Date,
	email: string,
	favorites?: string[],
	isAdmin?: boolean,
	lastLogin?: Date | null,
	name: string,
	password: string,
	updatedAt?: Date,
	username: string,
}

export interface IUserLink {
	_id: string,
	name: string,
	username: string,
}

export interface IUserProfile extends Omit<IUserData, 'email' | 'favorites' | 'password'> {
	campaigns?: ICampaignLink[],
	email?: string,
	favorites?: IArticleLink[],
	sheets?: ISheetLink[],
}

type IUserSearchResult = Pick<IUserProfile, 'isAdmin' | 'lastLogin' | 'name' | 'username'>

@index({ email: 'text', name: 'text', username: 'text' })
@modelOptions({
	options: { allowMixed: Severity.ALLOW },
	schemaOptions: { id: false, timestamps: true, versionKey: 'version' },
})
@pre<User>('save', function () {
	this.email = this.email.toLowerCase().trim()
	this.name = this.name.trim()
	this.username = this.username.toLowerCase().trim()
	this.unmarkModified('createdAt')

	if (this.isModified('password')) {
		const salt = bcrypt.genSaltSync(10)
		const hash = bcrypt.hashSync(this.password, salt)
		this.password = hash
	}
})
export class User implements IUserData {
	_id?: string
	createdAt?: Date
	updatedAt?: Date
	version?: number

	@prop({
		match: [REGEX.EMAIL_ADDRESS, MESSAGES.INVALID_EMAIL],
		required: true,
		trim: true,
		unique: true,
	})
	public email: string = ''

	@prop({ default: [], type: [String] })
	public favorites?: string[] = []

	@prop({ default: false })
	public isAdmin?: boolean = false

	@prop({ default: null })
	public lastLogin?: Date | null = null

	@prop({ trim: true })
	public name: string = ''

	@prop({ match: [REGEX.PASSWORD, MESSAGES.INVALID_PASSWORD], select: false })
	public password: string = ''

	@prop({ match: [REGEX.USERNAME, MESSAGES.INVALID_USERNAME], trim: true, unique: true })
	public username: string = ''

	comparePassword(password: string): boolean {
		return bcrypt.compareSync(password, this.password)
	}

	async campaignLinks(): Promise<ICampaignLink[]> {
		return Campaign.find(
			// @ts-expect-error - incomplete typings on .find()
			{ $or: [{ editors: this._id }, { owners: this._id }, { players: this._id }] },
			{ _id: 1, subdomain: 1, title: 1 },
		)
	}
	async favoriteLinks(): Promise<IArticleLink[]> {
		const byCampaign = new Map<string, Set<string>>()
		this.favorites?.forEach(favorite => {
			const [subdomain, slug] = favorite.split(':')
			const slugs = byCampaign.get(subdomain) ?? new Set<string>()
			slugs.add(slug)
			byCampaign.set(subdomain, slugs)
		})

		const byCampaignFavorites = await Promise.all(
			Array.from(byCampaign.entries())
				.map(async ([subdomain, slugs]) => {
					const campaign = await Campaign.findOne({ subdomain }, { _id: 1, sources: 1 })
					const articles = await loadByCampaign<IArticleLink>('Article', campaign, {
						aggregation: [{ $project: { slug: 1, title: 1 } }],
						filter: { $or: [{ slug: { $in: [...slugs] } }, { aliases: { $in: [...slugs] } }] },
					})
					return articles.map(article => ({
						slug: article.slug,
						subdomain,
						title: article.title,
					}))
				}),
		)
		return byCampaignFavorites.flat() as IArticleLink[]
	}
	async sheetLinks(): Promise<ISheetLink[]> {
		const sheets = await Sheet.find({ ownedBy: this._id }, { slug: 1, title: 1 })
			.populate('campaign', 'subdomain')
			.exec()
		return sheets.map(sheet => ({
			slug: sheet.slug,
			subdomain: sheet.campaign!.subdomain,
			title: sheet.title!,
		}))
	}
	async toProfile(fullView: boolean = false): Promise<IUserProfile> {
		const profile = {
			_id: this._id,
			isAdmin: this.isAdmin ?? false,
			lastLogin: this.lastLogin ?? null,
			name: this.name,
			username: this.username,
		}
		if (fullView) {
			Object.assign(profile, {
				campaigns: await this.campaignLinks(),
				email: this.email,
				favorites: await this.favoriteLinks(),
				sheets: await this.sheetLinks(),
			})
		}

		return profile
	}
}

const search = async (
	searchTerm: string | RegExp,
	limit: number = 10,
): Promise<IUserSearchResult[]> => {
	const email = typeof searchTerm === 'string' ? searchTerm : null
	const regex = searchTerm instanceof RegExp ? searchTerm : new RegExp(searchTerm)
	return Users.aggregate<IUserSearchResult[]>([
		{ $match: { $or: [{ email }, { username: regex }, { name: regex }] } },
		{ $project: { isAdmin: 1, lastLogin: 1, name: 1, username: 1 } },
		{ $limit: limit },
	]).exec()
}

interface IUsers extends ReturnModelType<typeof User> {
	search: typeof search,
}

export const Users: IUsers = Object.assign(getModelForClass(User), {
	search,
})
