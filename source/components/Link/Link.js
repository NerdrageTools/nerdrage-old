import React, { Component } from 'react'
import PageLink from '@/components/PageLink/PageLink'
import Application from '@/contexts/Application'
import parseHref from '@/utilities/parseHref'

export default class Link extends Component {
  static contextType = Application

  render = () => {
    const { className = '', children, href = '', subdomain, ...props } = this.props

    if (className.split(' ').includes('external')) {
      return <a {...{ className, href }} {...props}>{children}</a>
    }

    return (
      <PageLink {...{ className, ...parseHref(href), subdomain, ...props }}>
        {children}
      </PageLink>
    )
  }
}
