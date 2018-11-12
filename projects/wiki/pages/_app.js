import fetch from 'isomorphic-unfetch'
import App, { Container } from 'next/app'
import React from 'react'
import Layout from '@/components/Layout'
import Campaign from '@/contexts/Campaign'
import URI from '@/utilities/URI'
import '@/styles/all.scss'

export default class Wiki extends App {
  static getInitialProps = async (context) => {
    const { Component } = context
    const props = await App.getInitialProps(context)
    const campaign = await fetch(URI(context.ctx.req, '/api/campaign')).then(r => r.json())
    return { ...props, campaign, Component }
  }

  render = () => {
    const { campaign, Component, pageProps } = this.props // eslint-disable-line

    return (
      <Campaign.Provider value={campaign}>
        <Container className="wiki">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </Campaign.Provider>
    )
  }
}
