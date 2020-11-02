import { ICampaignLink } from './ICampaign'
import { IUserLink } from './IUser'

export type ISheetLink = Pick<ISheet, '_id' | 'campaign' | 'slug' | 'title'>

export interface ISheetLayout {
	categorize: boolean,
	children: ISheetLayout[],
	colSpan: number,
	columns: number,
	title?: string,
	type?: string,
}

export interface ISheet {
	_id: string,
	campaign: ICampaignLink,
	createdAt: string,
	isEditor: boolean,
	isOwner: boolean,
	isVisible: boolean,
	layout: ISheetLayout,
	ownedBy: IUserLink,
	secret: boolean,
	slug: string,
	template: boolean,
	title: string,
	updatedAt: string,
	version: number,
}
