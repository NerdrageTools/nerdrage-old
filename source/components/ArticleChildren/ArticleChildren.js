import React from 'react'
import ArticleLink from '@/components/ArticleLink'
import TagIcon from '@/icons/tag.svg'
import './ArticleChildren.scss'

export default function ArticleChildren({
  articles = [],
  caption = 'Child Articles',
  className = '',
  icon = <TagIcon />,
}) {
  if (!articles.length) return <div className="tag-browser is-hidden" />

  const links = articles
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(({ slug, title }) => (
      <ArticleLink key={slug} slug={slug}>{title}</ArticleLink>
    ))

  return (
    <div className={`article-children ${className}`.trim()}>
      <header>{icon} {caption}</header>
      <div className="link-list">{links}</div>
    </div>
  )
}
