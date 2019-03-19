import NextLink from 'next/link'
import React, { Component } from 'react'
import Application from '@/contexts/Application'

class ArticleLink extends Component {
  static contextType = Application
  static defaultProps = {
    domain: '',
    slug: '',
  }

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

    if (campaign.domain !== currentDomain) {
      const href = `//${campaign.domain}.${rootUrl}/${type}/${slug}`
      return <a {...linkProps} href={href}>{children}</a>
    }

    return (
      <NextLink as={`/${type}/${slug}`} href={`/${type}?slug=${slug}`}>
        <a {...linkProps}>{children}</a>
      </NextLink>
    )
  }
}

ArticleLink.displayName = 'ArticleLink'
export default ArticleLink
