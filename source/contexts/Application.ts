import { Router } from 'next/router'
import { noop } from '@/utilities/noop'
import React from 'react'

const CAMPAIGN_DEFAULTS = {
	createdAt: null,
	createdBy: {},
	editors: [],
	lastUpdatedAt: null,
	lastUpdatedBy: {},
	navigation: [],
	owners: [],
	secret: false,
	subdomain: '',
	theme: {
		background: '#fff',
		fontFamily: 'Ubuntu',
		normalText: '#333',
		primary: '#42afe3',
		primaryText: '#fff',
	},
	title: 'New Campaign',
	version: 0,
}
const USER_DEFAULTS = {
	anonymous: true,
}

type TContext = {
	campaign: typeof CAMPAIGN_DEFAULTS,
	logOff: typeof noop,
	rootUrl: string,
	router?: Router,
	setCampaign: typeof noop,
	setSize: typeof noop,
	setUser: typeof noop,
	size: 'small' | 'medium' | 'large',
	subdomain: string,
	theme: typeof CAMPAIGN_DEFAULTS.theme,
	updateCampaign: typeof noop,
	updateUser: typeof noop,
	user: typeof USER_DEFAULTS,
}

export const Application = React.createContext<TContext>({
	campaign: CAMPAIGN_DEFAULTS,
	logOff: noop,
	rootUrl: '',
	setCampaign: noop,
	setSize: noop,
	setUser: noop,
	size: 'large',
	subdomain: '',
	theme: CAMPAIGN_DEFAULTS.theme,
	updateCampaign: noop,
	updateUser: noop,
	user: USER_DEFAULTS,
})
