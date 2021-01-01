import { string } from 'mobx-state-tree/dist/internal'
import React from 'react'
import { Z_UNKNOWN } from 'zlib'

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

interface IApplication {
	campaign: typeof CAMPAIGN_DEFAULTS,
	router: any,
	rootUrl: string,
	subdomain: string,
	user: typeof USER_DEFAULTS,
}

export const Application = React.createContext<IApplication>({
	campaign: CAMPAIGN_DEFAULTS,
	router: {},
	rootUrl: '',
	subdomain: '',
	user: USER_DEFAULTS,
})
