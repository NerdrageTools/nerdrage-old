import { Router } from 'next/router'
import React from 'react'
import { IUserProfile } from '~/server/models'
import type { ICampaignData } from '~/server/models/Campaign'
import { defaultTheme, ITheme } from '~/server/models/Theme'
import type { IUserData } from '~/server/models/User'
import { noop } from '~/utilities/noop'

const CAMPAIGN_DEFAULTS: ICampaignData = {
	editors: [],
	navigation: [],
	owners: [],
	secret: true,
	theme: defaultTheme,
	title: 'New Campaign',
}

export enum LayoutSize {
	Small = 'small',
	Medium = 'medium',
	Large = 'large'
}
export interface IApplicationContext {
	campaign: ICampaignData,
	handleLogOff: typeof noop,
	rootUrl: string,
	router?: Router,
	setCampaign: typeof noop,
	setSize: (size: LayoutSize) => void,
	setUser: (user: Partial<IUserProfile>) => void,
	size: LayoutSize,
	subdomain: string,
	theme: ITheme,
	updateCampaign: (update?: Partial<ICampaignData>) => void,
	updateUser: (update: Partial<IUserData>) => void,
	user: IUserProfile | null,
}

export const Application = React.createContext<IApplicationContext>({
	campaign: CAMPAIGN_DEFAULTS as ICampaignData,
	handleLogOff: noop,
	rootUrl: '',
	setCampaign: noop,
	setSize: noop,
	setUser: noop,
	size: LayoutSize.Large,
	subdomain: '',
	theme: defaultTheme,
	updateCampaign: noop,
	updateUser: noop,
	user: null,
})
