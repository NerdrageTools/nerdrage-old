import fetch from 'isomorphic-unfetch'
import App, { Container } from 'next/app'
import React from 'react'
import Layout from '@/components/Layout'
import Application from '@/contexts/Application'
import defaultTheme from '@/data/defaultTheme'
import Error from '@/pages/_error'
import pluck from '@/utilities/pluck'
import URI from '@/utilities/URI'
import '@/styles/all.scss'

export default class Wiki extends App {
  static getInitialProps = async context => {
    const { Component, ctx: { req } } = context
    const headers = pluck(req && req.headers, 'cookie')
    const props = await App.getInitialProps(context)
    const campaign = await fetch(URI(req, '/api/campaign'), { headers }).then(r => r.json())
    const user = await fetch(URI(req, '/api/user'), { headers }).then(r => r.json())
    let host

    /* eslint-disable prefer-destructuring */
    if (process.browser) {
      host = window.location.host
    } else {
      host = req.get('host')
    }
    /* eslint-enable prefer-destructuring */

    const domain = host.split('.').shift()
    const rootUrl = host.slice(domain.length + 1)

    return {
      ...props,
      campaign,
      Component,
      domain,
      rootUrl,
      user,
    }
  }

  state = {
    campaign: this.props.campaign,
    user: this.props.user,
  }

  logOff = async event => {
    event.preventDefault()
    await fetch('/api/user/logoff', { method: 'POST' })
    window.location.href = window.location.href
  }

  setCampaign = campaign => this.setState({ campaign })
  setUser = user => this.setState({ user })

  render = () => {
    const { Component, domain, pageProps, rootUrl, router } = this.props
    const { campaign, user } = this.state
    const theme = (campaign && campaign.theme) || defaultTheme
    const context = {
      campaign,
      domain,
      logOff: this.logOff,
      rootUrl,
      router,
      setCampaign: this.setCampaign,
      setUser: this.setUser,
      theme,
      user,
    }

    const campaignError = !campaign && !['/user', '/login', '/signup'].includes(router.pathname)

    return (
      <Application.Provider value={context}>
        <Container>
          <Layout className={!campaign ? 'no-campaign' : ''}>
            {campaignError
              ? <Error
                  statusCode={404}
                  message="This campaign does not exist."
                />
              : <Component {...pageProps} />
            }
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
