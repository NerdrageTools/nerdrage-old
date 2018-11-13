import NextLink from 'next/link'
import React from 'react'

const ArticleLink = ({ children, slug = '', ...linkProps }) => (
  <NextLink as={`/wiki/${slug}`} href={`/article?slug=${slug}`}>
    <a {...linkProps}>{children}</a>
  </NextLink>
)

ArticleLink.displayName = 'ArticleLink'
export default ArticleLink
