import NextLink from 'next/link'
import React, { Component } from 'react'
import Application from '@/contexts/Application'

export default class PageLink extends Component {
  static contextType = Application
  static defaultProps = {
    domain: '',
    slug: '',
  }
  static displayName = 'PageLink'

  render = () => {
    const {
      active,
      campaign = this.context.campaign,
      children,
      slug = '',
      type = 'article',
      ...linkProps
    } = this.props
    const { domain: currentDomain, rootUrl } = this.context
    if (active) return <b>{children}</b>

    if (type === 'campaign') {
      const href = `//${campaign.domain}.${rootUrl}/campaign`
      if (campaign.domain !== this.context.campaign.domain) {
        return <a {...linkProps} href={href}>{children}</a>
      }
      return <NextLink as="/campaign" href="/campaign">{children}</NextLink>
    }

    const slashSlug = slug ? `/${slug}` : ''
    const queryStringSlug = slug ? `?slug=${slug}` : ''

    if (campaign.domain !== currentDomain) {
      const href = `//${campaign.domain}.${rootUrl}/${type}${slashSlug}`
      return <a {...linkProps} href={href}>{children}</a>
    }


    return (
      <NextLink as={`/${type}${slashSlug}`} href={`/${type}${queryStringSlug}`}>
        <a {...linkProps}>{children}</a>
      </NextLink>
    )
  }
}
