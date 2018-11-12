import Head from 'next/head'
import React, { Component } from 'react'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Campaign from '@/contexts/Campaign'
import './Layout.scss'

export default class Layout extends Component {
  static contextType = Campaign

  render = () => {
    const { theme } = this.context

    return (<>
      <Head>
        <link
          key="content-font"
          href={`//fonts.googleapis.com/css?family=${theme.fontFamily}:400,400i,700,700i`}
          rel="stylesheet"
        />
      </Head>
      <div className="wiki layout" style={theme}>
        <Header />
        <div className="content">
          <Navigation />
          {this.props.children}
        </div>
      </div>
  </>
    )
  }
}
