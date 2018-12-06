import React from 'react'

export const DEFAULTS = {
  name: 'New Campaign',
  navigation: [],
  slug: '',
  theme: {
    background: '#fff',
    fontFamily: 'Ubuntu',
    foreground: '#333',
    primary: '#42afe3',
    secondary: '#fff',
  },
}

export default React.createContext(DEFAULTS)
