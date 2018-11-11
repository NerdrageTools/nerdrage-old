import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import ThemeContext from '@/contexts/Theme'
import URI from '@/utilities/URI'
import './Layout.scss'

export default class Layout extends Component {
  static getInitialProps = async ({ req }) => ({
    theme: await fetch(URI(req, '/api/theme')).then(r => r.json()),
  })

  static defaultProps = {
    theme: {
      background: '#fff',
      fontForContent: 'Ubuntu',
      fontForHeaders: 'Calibri',
      foreground: '#333',
      primary: '#42afe3',
      secondary: '#fff',
    },
  }

  componentWillMount() {
    if (process.browser) {
      const { fontForContent, fontForHeaders } = this.props.theme
      const WebFont = require('webfontloader') // eslint-disable-line
      WebFont.load({ google: { families: [fontForContent, fontForHeaders] } })
    }
  }

  render = () => (
    <ThemeContext.Provider value={this.props.theme}>
      <div className="wiki layout">
        <Header />
        <div className="content">
          <Navigation />
          {this.props.children}
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
