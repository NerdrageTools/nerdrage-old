import React, { Component } from 'react'
import PageLink from '@/components/PageLink/PageLink'
import Application from '@/contexts/Application'

export default class Link extends Component {
  static contextType = Application

  static parseHref = href => {
    if (typeof href !== 'string') return {}

    const [bare] = href.split(/[#?]/)
    const parts = bare.split('/').filter(Boolean)
    const slug = parts.pop()
    const type = parts.pop() || ''

    return { slug, type }
  }

  render = () => {
    const { className = '', children, href = '', ...props } = this.props

    if (className.split(' ').includes('external')) {
      return <a {...{ className, href }} {...props}>{children}</a>
    }

    return (
      <PageLink {...Link.parseHref(href)} {...props}>
        {children}
      </PageLink>
    )
  }
}
