import React from 'react'

export const DEFAULTS = {
  createdAt: null,
  createdBy: {},
  domain: '',
  editors: [],
  lastUpdatedAt: null,
  lastUpdatedBy: {},
  name: 'New Campaign',
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
  version: 0,
}

export default React.createContext(DEFAULTS)
