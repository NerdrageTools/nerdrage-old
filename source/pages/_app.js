import fetch from 'isomorphic-unfetch'
import App, { Container } from 'next/app'
import React from 'react'
import Layout from '@/components/Layout'
import Application from '@/contexts/Application'
import defaultTheme from '@/data/defaultTheme'
import Error from '@/pages/_error'
import noop from '@/utilities/noop'
import '@/styles/all.scss'

export default class Wiki extends App {
  static getInitialProps = async context => {
    const { Component, ctx: { req: request = {} } } = context
    const props = await App.getInitialProps(context)

    const fetchParams = { headers: { 'Content-Type': 'application/json' } }
    const campaign = request
      ? request.campaign
      : await fetch('/api/campaign', fetchParams).then(r => r.json())
    const user = request
      ? request.user
      : await fetch('/api/user', fetchParams).then(r => r.json())

    /* eslint-disable prefer-destructuring */
    let host
    if (process.browser) {
      host = window.location.host
    } else {
      host = request.get('host')
    }
    /* eslint-enable prefer-destructuring */

    const domain = host.split('.').shift()
    const rootUrl = host.slice(domain.length + 1)

    return { ...props, campaign, Component, domain, rootUrl, user }
  }

  state = {
    campaign: this.props.campaign,
    user: this.props.user,
  }

  logOff = async event => {
    event.preventDefault()
    this.setUser(await fetch('/api/user/auth/logoff').then(r => r.json()))
    this.updateCampaign()
  }

  setCampaign = (campaign, callback = noop) => this.setState({ campaign }, callback)
  setUser = (user, callback = noop) => this.setState({ user }, callback)
  updateCampaign = async (updates, callback = noop) => {
    const { campaign } = this.state
    if (!campaign) { return false }

    const result = await fetch(`/api/campaign/${this.state.campaign.domain}`, {
      body: updates ? JSON.stringify(updates) : undefined,
      headers: { 'Content-Type': 'application/json' },
      method: updates ? 'POST' : 'GET',
    })
    const json = await result.json()

    if (result.status === 200) {
      this.setCampaign(json, callback)
      return true
    }

    this.setCampaign({}, callback)
    return false
  }

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
      updateCampaign: this.updateCampaign,
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
