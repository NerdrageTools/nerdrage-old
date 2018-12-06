import merge from 'deepmerge'
import fetch from 'isomorphic-unfetch'
import App, { Container } from 'next/app'
import React from 'react'
import Layout from 'wiki/components/Layout'
import Campaign, { DEFAULTS } from 'wiki/contexts/Campaign'
import URI from 'wiki/utilities/URI'
import 'wiki/styles/all.scss'

export default class Wiki extends App {
  static getInitialProps = async (context) => {
    const { Component } = context
    const props = await App.getInitialProps(context)
    const campaign = await fetch(URI(context.ctx.req, '/api/campaign'))
      .then(r => r.json())
      .then(c => merge(DEFAULTS, c))
    return { ...props, campaign, Component }
  }

  render = () => {
    const { campaign, Component, pageProps } = this.props // eslint-disable-line
    const { theme } = campaign

    return (
      <Campaign.Provider value={campaign}>
        <Container className="wiki">
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <style>{`
            :root {
              --font-primary:     ${theme.fontFamily};
              --color-background: ${theme.background};
              --color-borders:    ${theme.primary};
              --color-foreground: ${theme.foreground};
              --color-primary:    ${theme.primary};
              --color-secondary:  ${theme.secondary};
            }
          `}</style>
        </Container>
      </Campaign.Provider>
    )
  }
}
