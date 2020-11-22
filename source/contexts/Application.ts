import { Router } from 'next/router'
import React from 'react'
import { IUserProfile } from '~/server/models'
import { ICampaign } from '~/server/schema/ICampaign'
import { ITheme } from '~/server/schema/ITheme'
import { IUser } from '~/server/schema/IUser'
import { noop } from '~/utilities/noop'

const CAMPAIGN_DEFAULTS: Partial<ICampaign> = {
	editors: [],
	navigation: [],
	owners: [],
	secret: true,
	theme: {
		background: '#fff',
		fontFamily: 'Ubuntu',
		normalText: '#333',
		primary: '#42afe3',
		primaryText: '#fff',
	},
	title: 'New Campaign',
}

export enum LayoutSize {
	Small = 'small',
	Medium = 'medium',
	Large = 'large'
}
export interface IApplicationContext {
	campaign: ICampaign,
	handleLogOff: typeof noop,
	rootUrl: string,
	router?: Router,
	setCampaign: typeof noop,
	setSize: (size: LayoutSize) => void,
	setUser: (user: Partial<IUserProfile>) => void,
	size: LayoutSize,
	subdomain: string,
	theme: ITheme,
	updateCampaign: (update?: Partial<ICampaign>) => void,
	updateUser: (update: Partial<IUser>) => void,
	user: IUserProfile | null,
}

export const Application = React.createContext<IApplicationContext>({
	campaign: CAMPAIGN_DEFAULTS as ICampaign,
	handleLogOff: noop,
	rootUrl: '',
	setCampaign: noop,
	setSize: noop,
	setUser: noop,
	size: LayoutSize.Large,
	subdomain: '',
	theme: CAMPAIGN_DEFAULTS.theme as ITheme,
	updateCampaign: noop,
	updateUser: noop,
	user: null,
})
