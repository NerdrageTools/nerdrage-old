import fetch from 'isomorphic-unfetch'
import App, { Container } from 'next/app'
import React from 'react'
import Layout from '@/components/Layout'
import Application from '@/contexts/Application'
import URI from '@/utilities/URI'
import '@/styles/all.scss'

export default class Wiki extends App {
  static getInitialProps = async context => {
    const { Component } = context
    const props = await App.getInitialProps(context)
    const [campaign, user] = await Promise.all([
      fetch(URI(context.ctx.req, '/api/campaign')).then(r => r.json()),
      fetch(URI(context.ctx.req, '/api/user')).then(r => r.json()),
    ])
    return {
      ...props,
      campaign,
      Component,
      user,
    }
  }

  state = {
    user: this.props.user,
  }

  setUser = user => this.setState({ user })

  render = () => {
    const { campaign, Component, pageProps } = this.props // eslint-disable-line
    const { user } = this.state
    const { theme } = campaign
    const context = {
      campaign,
      setUser: this.setUser,
      user,
    }

    return (
      <Application.Provider value={context}>
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
      </Application.Provider>
    )
  }
}
