import React from 'react'
import PageLink from '@/components/PageLink'
import TagIcon from '@/icons/tag.svg'
import './PageLinkList.scss'

export default function PageLinkList({
  caption = 'Child Articles',
  className = '',
  icon = <TagIcon />,
  pages = [],
  type = 'article',
}) {
  if (!pages.length) return <div className="tag-browser is-hidden" />

  let links = []

  if (type === 'campaign') {
    links = pages
      .sort((a, b) => a.title.localeCompare(b.title))
      .map(campaign => (
        <li key={campaign.subdomain} title={campaign.title}>
          <PageLink {...{ campaign, ...campaign, type }}>
            {campaign.title}
          </PageLink>
        </li>
      ))
  } else {
    links = pages
      .sort((a, b) => a.title.localeCompare(b.title))
      .map(({ campaign, slug, title }) => (
        <li key={slug} title={`${campaign.title}: ${title}`}>
          <PageLink {...{ campaign, slug, type }}>{title}</PageLink>
        </li>
      ))
  }

  return (
    <div className={`page-link-list ${className}`.trim()}>
      <header>{icon} {caption}</header>
      <ul className="link-list">{links}</ul>
    </div>
  )
}