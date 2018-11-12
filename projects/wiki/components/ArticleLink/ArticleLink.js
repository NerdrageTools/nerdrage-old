import NextLink from 'next/link'
import React, { Component } from 'react'
import Campaign from '@/contexts/Campaign'

export default class Link extends Component {
  static contextType = Campaign
  static defaultProps = {
    slug: '',
    type: 'article',
  }

  render = () => {
    const { children, slug, ...linkProps } = this.props
    const { theme } = this.context

    return (
      <NextLink as={`/wiki/${slug}`} href={`/article?slug=${slug}`}>
        <a style={{ color: theme.primary }} {...linkProps}>{children}</a>
      </NextLink>
    )
  }
}
