import Head from 'next/head'
import React, { Component } from 'react'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Application from '@/contexts/Application'
import './Layout.scss'

export default class Layout extends Component {
  static contextType = Application

  render = () => {
    const { name, theme } = this.context.campaign

    return (
      <>
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
    )
  }
}
