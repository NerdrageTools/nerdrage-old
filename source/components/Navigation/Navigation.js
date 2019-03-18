import React, { Component } from 'react'
import ArticleLink from '@/components/ArticleLink'
import Application from '@/contexts/Application'
import noop from '@/utilities/noop'
import './Navigation.scss'

export default class Navigation extends Component {
  static contextType = Application
  static defaultProps = {
    items: [],
    onItemClick: noop,
  }

  renderList = (list = [], listTitle = '', type = 'article') => Boolean(list.length) && <>
    <b>{listTitle}</b>
    <ul className="favorites">
      {list.map(({ domain, slug, title: linkTitle }, key) => (
        <li key={key}>
          <ArticleLink
            {...{ domain, slug, type }}
            active={this.context.domain === domain && this.context.router.asPath === `/${type}/${slug}`}
            onClick={this.props.onItemClick}
          >
            {linkTitle} {domain && type !== 'campaign' && `(${domain})`}
          </ArticleLink>
        </li>
      ))}
    </ul>
  </>

  render = () => {
    const { campaign, user = {} } = this.context
    const { campaigns = [] } = user
    const sheets = (user.sheets || []).map(({ campaign: { domain }, slug, title }) => ({ domain, slug, title }))

    if (!campaign) return null

    return (
      <div className="navigation">
        {this.renderList(campaign.navigation, campaign.title)}
        {user && <>
          {this.renderList(campaigns, 'My Campaigns', 'campaign')}
          {this.renderList(user.favorites, 'My Favorites')}
          {this.renderList(sheets, 'My Sheets', 'sheet')}
        </>}
      </div>
    )
  }
}
