import Header from '@nerdrage/wiki/components/Header'
import Navigation from '@nerdrage/wiki/components/Navigation'
import Campaign from '@nerdrage/wiki/contexts/Campaign'
import Head from 'next/head'
import React, { Component } from 'react'
import './Layout.scss'

export default class Layout extends Component {
  static contextType = Campaign

  render = () => {
    const { name, theme } = this.context

    return <>
      <Head>
        <title>{name}</title>
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
  }
}
