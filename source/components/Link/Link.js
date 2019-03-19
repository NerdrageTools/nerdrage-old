import React, { Component } from 'react'
import PageLink from '@/components/PageLink'
import Application from '@/contexts/Application'

export default class Link extends Component {
  static contextType = Application

  render = () => {
    const { className = '', children, href, ...props } = this.props
    if (className.split(' ').includes('external')) {
      return <a {...this.props}>{children}</a>
    }

    const [type, slug] = href.split('/')
    return (
      <PageLink {...props} type={type} slug={slug}>
        {children}
      </PageLink>
    )
  }
}
