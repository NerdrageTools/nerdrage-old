import Head from 'next/head'
import React, { Component } from 'react'
import Header from 'wiki/components/Header'
import Navigation from 'wiki/components/Navigation'
import Campaign from 'wiki/contexts/Campaign'
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
      <div className="wiki layout">
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
