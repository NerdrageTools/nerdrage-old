import React, { Component } from 'react'
import ArticleLink from '@/components/ArticleLink'
import Application from '@/contexts/Application'
import './Navigation.scss'

export default class Navigation extends Component {
  static contextType = Application
  static defaultProps = {
    items: [],
  }

  renderList = (list, title, type = 'article') => Boolean(list.length) && <>
    <b>{title}</b>
    <ul className="favorites">
      {list.map(({ domain, slug, title: linkTitle }, key) => (
        <li>
          <ArticleLink
            {...{ key, slug, type }}
            active={this.context.domain === domain && this.context.router.asPath === `/${type}/${slug}`}
          >
            {linkTitle} {domain && `(${domain})`}
          </ArticleLink>
        </li>
      ))}
    </ul>
  </>

  render = () => {
    const { campaign, user } = this.context
    const favorites = ((user && user.favorites) || []).map(favorite => {
      const [domain, slug] = favorite.split(':')
      return { domain, slug, title: slug }
    })
    const sheets = ((user && user.sheets) || []).map(sheet => {
      const { campaign: { domain }, slug, title } = sheet
      return { domain, slug, title }
    })

    if (!campaign) return null

    return (
      <div className="navigation">
        {this.renderList(campaign.navigation, 'Campaign')}
        {this.renderList(favorites, 'My Favorites')}
        {this.renderList(sheets, 'My Sheets', 'sheet')}
      </div>
    )
  }
}
