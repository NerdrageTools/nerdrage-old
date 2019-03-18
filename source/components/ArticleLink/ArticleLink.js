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
    const { active, children, domain, slug = '', type = 'article', ...linkProps } = this.props
    const { domain: currentDomain, rootUrl } = this.context
    if (active) return <b>{children}</b>

    if (type === 'campaign') {
      const href = `//${domain}.${rootUrl}/`
      return <a {...linkProps} href={href}>{children}</a>
    }

    if (domain && domain !== currentDomain) {
      const href = `//${domain}.${rootUrl}/${type}/${slug}`
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
