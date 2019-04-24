import fetch from 'isomorphic-unfetch'
import App, { Container } from 'next/app'
import React from 'react'
import Layout from '@/components/Layout'
import Application from '@/contexts/Application'
import defaultTheme from '@/data/defaultTheme'
import '@/styles/all.scss'
/* eslint-disable import/extensions */
import imageBook from '@/icons/book.png'
import imageCombo from '@/icons/combo.png'
import imageSystem from '@/icons/dice.gif'
import imageInfo from '@/icons/info.png'
/* eslint-enable import/extensions */
import Error from '@/pages/_error'
import noop from '@/utilities/noop'

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

    const subdomain = host.split('.').shift()
    const rootUrl = host.slice(subdomain.length + 1)

    return { ...props, campaign, Component, rootUrl, subdomain, user }
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

    const result = await fetch(`/api/campaign/${this.state.campaign.subdomain}`, {
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
  updateUser = async (updates, callback = noop) => {
    const { user } = this.state

    const result = await fetch(`/api/user/${user.username}`, {
      body: updates ? JSON.stringify(updates) : undefined,
      headers: { 'Content-Type': 'application/json' },
      method: updates ? 'POST' : 'GET',
    })
    const json = await result.json()

    if (result.status === 200) {
      this.setUser(json, callback)
      return true
    }

    this.setUser({}, callback)
    return false
  }

  render = () => {
    const { Component, pageProps, rootUrl, router, subdomain } = this.props
    const { campaign, user } = this.state
    const theme = Object.assign(defaultTheme, (campaign && campaign.theme) || {})
    const context = {
      campaign,
      logOff: this.logOff,
      rootUrl,
      router,
      setCampaign: this.setCampaign,
      setUser: this.setUser,
      subdomain,
      theme,
      updateCampaign: this.updateCampaign,
      updateUser: this.updateUser,
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
              --color-background:    ${theme.background};
              --color-borders:       ${theme.primary};
              --color-foreground:    ${theme.foreground};
              --color-primary:       ${theme.primary};
              --color-primary-text:  ${theme.primaryText};
              --font-for-text:       ${theme.fontForText};
              --font-for-titles:     ${theme.fontForTitles};
              --font-size:           ${theme.fontSize};
              font-family:           ${theme.fontForText};
              font-size:             ${theme.fontSize};

              --image-book:          url(${imageBook});
              --image-combo:         url(${imageCombo});
              --image-system:        url(${imageSystem});
              --image-info:          url(${imageInfo});
            }
          `}</style>
        </Container>
      </Application.Provider>
    )
  }
}
