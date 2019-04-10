import NextLink from 'next/link'
import React, { Component } from 'react'
import Application from '@/contexts/Application'

export default class PageLink extends Component {
  static contextType = Application
  static defaultProps = {
    slug: '',
    subdomain: '',
  }
  static displayName = 'PageLink'

  render = () => {
    const { campaign, subdomain: currentDomain, rootUrl } = this.context
    const {
      active,
      children,
      slug = '',
      subdomain,
      type = 'article',
      ...linkProps
    } = this.props
    const contents = children || `Unnamed ${type}`
    if (active) return <span className="active" title={contents}>{contents}</span>

    if (type === 'campaign') {
      const href = `//${campaign.subdomain}.${rootUrl}/campaign`
      if (campaign.subdomain !== this.context.campaign.subdomain) {
        return <a {...linkProps} href={href}>{contents}</a>
      }
      return (
        <NextLink as="/campaign" href="/campaign">
          <a {...linkProps}>{contents}</a>
        </NextLink>
      )
    }

    const slashSlug = slug ? `/${slug}` : ''
    const queryStringSlug = slug ? `?slug=${slug}` : ''

    if (subdomain && subdomain !== currentDomain) {
      const href = `//${subdomain}.${rootUrl}/${type}${slashSlug}`
      return <a {...linkProps} {...{ href, subdomain }}>{contents}</a>
    }


    return (
      <NextLink as={`/${type}${slashSlug}`} href={`/${type}${queryStringSlug}`}>
        <a {...linkProps}>{contents}</a>
      </NextLink>
    )
  }
}
