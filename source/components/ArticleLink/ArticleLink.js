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
    const { active, children, domain, slug = '', ...linkProps } = this.props
    const { domain: currentDomain, rootUrl } = this.context
    if (active) return <b>{children}</b>

    if (domain && domain !== currentDomain) {
      const href = `//${domain}.${rootUrl}/article/${slug}`
      return <a {...linkProps} href={href}>{children}</a>
    }

    return (
      <NextLink as={`/article/${slug}`} href={`/article?slug=${slug}`}>
        <a {...linkProps}>{children}</a>
      </NextLink>
    )
  }
}

ArticleLink.displayName = 'ArticleLink'
export default ArticleLink
