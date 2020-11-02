import type { ILink } from '~/server/schema/ILink'
import { INavigation } from '~/server/schema/INavigation'
import { ITheme } from '~/server/schema/ITheme'
import { IUserLink } from '~/server/schema/IUser'

export interface ICampaignLink extends Omit<ILink, 'slug'> {
	subdomain: string,
}

export interface ICampaign {
	createdAt: string,
	createdBy: IUserLink,
	editors: IUserLink[],
	lastUpdatedAt: string,
	lastUpdatedBy: IUserLink,
	navigation: INavigation[],
	owners: IUserLink[],
	players: IUserLink[],
	secret: boolean,
	sources: ICampaignLink[],
	subdomain: string,
	theme: ITheme,
	title: string,
	version: number,
}
