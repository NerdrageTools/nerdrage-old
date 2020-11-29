/* eslint-disable max-classes-per-file */
import { getModelForClass, prop, Ref } from '@typegoose/typegoose'
import mongoose from 'mongoose'
import { DocumentBase, IDocumentBaseData } from '~/server/models/DocumentBase'
import { Slug } from '~/server/models/Slug'
import { defaultTheme, ITheme, Theme } from '~/server/models/Theme'
import { User } from '~/server/models/User'
import { unique } from '~/utilities/unique'

const { ObjectId } = mongoose.Types

export interface ICampaignData extends IDocumentBaseData {
	createdBy?: Ref<User>,
	editors?: Ref<User>[],
	lastUpdatedBy?: Ref<User>,
	navigation?: INavigationData[],
	owners?: Ref<User>[],
	players?: Ref<User>[],
	secret?: boolean,
	sources?: Ref<Campaign>[],
	subdomain?: string,
	theme?: ITheme,
	title?: string,
}

export type ICampaignLink = Pick<Campaign, 'id' | 'subdomain' | 'title'>

interface INavigationData {
	children?: INavigationData[],
	slug: string,
	title: string,
}
class Navigation implements INavigationData {
	@prop({ ...Slug, foreignField: 'slug', localField: 'slug', ref: 'Article' }) slug: string = ''
	@prop({ trim: true, type: String }) title: string = ''
}

const getId = (id: number | string | Ref<any>): mongoose.Types.ObjectId => {
	if (id?._bsontype === 'ObjectID') return id
	if (!id) return ObjectId()
	if (['string', 'number'].includes(typeof id)) {
		return ObjectId(id as string)
	}

	return getId(id?._id)
}

const DEFAULT_NAVIGATION: INavigationData[] = [{ slug: 'home', title: 'Home' }]

export class Campaign extends DocumentBase<ICampaignData> implements ICampaignData {
	@prop({ default: [], ref: 'User', type: () => [User] })
	editors?: Ref<User>[] = []

	@prop({ _id: false, default: DEFAULT_NAVIGATION, type: [Navigation] })
	navigation?: Navigation[] = DEFAULT_NAVIGATION

	@prop({ default: [], ref: 'User', type: () => [User] })
	owners?: Ref<User>[] = []

	@prop({ default: [], ref: 'User', type: () => [User] })
	players?: Ref<User>[] = []

	@prop({ default: false, type: Boolean })
	secret?: boolean = false

	@prop({ ref: 'Campaign', type: () => [Campaign] })
	sources?: Ref<Campaign>[] = []

	@prop({ ...Slug, required: true, type: String, unique: true })
	subdomain?: string = ''

	@prop({ _id: false, default: defaultTheme, type: Theme })
	theme?: Theme = defaultTheme

	@prop({ default: 'New Campaign', trim: true, type: String })
	title?: string = 'New Campaign'

	handlePreSave(): void {
		this.theme = { ...defaultTheme, ...this.theme }
	}
	handlePreValidate(): void {
		this.sources = unique<Ref<Campaign>>(this.sources || [])
		this.subdomain = this.subdomain?.toLowerCase()
	}

	public isEditableBy(user: number | string | Ref<User>): boolean {
		const id = getId(user)
		return this.isOwnedBy(user)
			|| this.editors!.some(editor => id.equals(getId(editor!)))
	}

	public isMember(user: number | string | Ref<User>): boolean {
		const id = getId(user)
		return this.owners!.some(owner => id.equals(getId(owner!)))
			|| this.players!.some(player => id.equals(getId(player!)))
			|| this.editors!.some(editor => id.equals(getId(editor!)))
	}

	public isOwnedBy(user: number | string | Ref<User>): boolean {
		const id = getId(user)
		return this.owners!.some(owner => id.equals(getId(owner!)))
			|| Boolean((user as User)?.isAdmin)
	}

	public isVisibleTo(user: number | string | Ref<User>): boolean {
		if (!this.secret || Boolean((user as User)?.isAdmin)) return true
		return this.isMember(user)
	}
}

export const Campaigns = getModelForClass(Campaign)
