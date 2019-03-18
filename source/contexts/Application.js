import React from 'react'

const CAMPAIGN_DEFAULTS = {
  createdAt: null,
  createdBy: {},
  domain: '',
  editors: [],
  lastUpdatedAt: null,
  lastUpdatedBy: {},
  navigation: [],
  owners: [],
  private: false,
  theme: {
    background: '#fff',
    fontFamily: 'Ubuntu',
    foreground: '#333',
    primary: '#42afe3',
    secondary: '#fff',
  },
  title: 'New Campaign',
  version: 0,
}
const USER_DEFAULTS = {
  anonymous: true,
}

export default React.createContext({
  campaign: CAMPAIGN_DEFAULTS,
  user: USER_DEFAULTS,
})
