import React from 'react'
import PageLink from '@/components/PageLink'
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
      <li key={slug}>
        <PageLink slug={slug}>{title}</PageLink>
      </li>
    ))

  return (
    <div className={`article-children ${className}`.trim()}>
      <header>{icon} {caption}</header>
      <ul className="link-list">{links}</ul>
    </div>
  )
}
