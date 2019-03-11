import NextLink from 'next/link'
import React from 'react'

const ArticleLink = ({ active, children, slug = '', ...linkProps }) => {
  if (active) return <b>{children}</b>

  return (
    <NextLink as={`/article/${slug}`} href={`/article?slug=${slug}`}>
      <a {...linkProps}>{children}</a>
    </NextLink>
  )
}

ArticleLink.displayName = 'ArticleLink'
export default ArticleLink
