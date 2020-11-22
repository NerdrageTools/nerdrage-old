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

export interface IApplicationContext {
	campaign: ICampaign,
	logOff: typeof noop,
	rootUrl: string,
	router?: Router,
	setCampaign: typeof noop,
	setSize: typeof noop,
	setUser: typeof noop,
	size: 'small' | 'medium' | 'large',
	subdomain: string,
	theme: ITheme,
	updateCampaign: (update: Partial<ICampaign>) => void,
	updateUser: (update: Partial<IUser>) => void,
	user: IUserProfile | null,
}

export const Application = React.createContext<IApplicationContext>({
	campaign: CAMPAIGN_DEFAULTS as ICampaign,
	logOff: noop,
	rootUrl: '',
	setCampaign: noop,
	setSize: noop,
	setUser: noop,
	size: 'large',
	subdomain: '',
	theme: CAMPAIGN_DEFAULTS.theme as ITheme,
	updateCampaign: noop,
	updateUser: noop,
	user: null,
})
