import NextLink from 'next/link'
import React, { Component } from 'react'
import Application from '@/contexts/Application'

export default class Link extends Component {
  static contextType = Application

  render = () => {
    const { className, children, href, ...props } = this.props
    if (className.split(' ').includes('external')) {
      return <a {...this.props}>{children}</a>
    }

    const [type, slug] = href.split('/')
    return (
      <NextLink href={`/${type}?slug=${slug}`} as={href}>
        <a className={className} href={href} {...props}>{children}</a>
      </NextLink>
    )
  }
}
