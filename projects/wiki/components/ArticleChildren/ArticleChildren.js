import TagIcon from 'core/icons/tag.svg'
import React from 'react'
import ArticleLink from 'wiki/components/ArticleLink'
import './ArticleChildren.scss'

const ArticleChildren = ({
  articles = [],
  caption = 'Child Articles',
  className = '',
  icon = <TagIcon />,
}) => {
  if (!articles.length) return <div className="tag-browser is-hidden" />

  const links = articles
    .sort((a, b) => a.displayName.localeCompare(b.displayName))
    .map(({ slug, displayName }) => (
      <ArticleLink key={slug} to={`/page/${slug}`}>{displayName}</ArticleLink>
    ))

  return (
    <div className={`article-children ${className}`.trim()}>
      <header>{icon} {caption}</header>
      <div className="link-list">{links}</div>
    </div>
  )
}

ArticleChildren.displayName = 'ArticleChildren'
export default ArticleChildren
