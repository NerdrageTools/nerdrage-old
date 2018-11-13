import NextLink from 'next/link'
import React from 'react'

export default ({ children, slug = '', ...linkProps }) => (
  <NextLink as={`/wiki/${slug}`} href={`/article?slug=${slug}`}>
    <a {...linkProps}>{children}</a>
  </NextLink>
)
