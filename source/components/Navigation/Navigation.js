import React, { Component } from 'react'
import ArticleLink from '@/components/ArticleLink'
import Application from '@/contexts/Application'
import noop from '@/utilities/noop'
import pluck from '@/utilities/pluck'
import './Navigation.scss'

export default class Navigation extends Component {
  static contextType = Application
  static defaultProps = {
    items: [],
    onItemClick: noop,
  }

  renderList = (list = [], listTitle = '', type = 'article') => (
    Boolean(list.length) && <>
      <b>{listTitle}</b>
      <ul className="favorites">
        {list.map(({ campaign = {}, slug, title }, key) => {
          const { domain = '', title: cTitle = '' } = campaign
          let text = title
          if (type !== 'campaign' && domain && domain !== this.context.domain) {
            text += ` (${cTitle || domain})`
          }

          return (
            <li key={key}>
              <ArticleLink
                {...{ campaign, slug, type }}
                active={this.context.domain === domain && this.context.router.asPath === `/${type}/${slug}`}
                onClick={this.props.onItemClick}
              >
                {text}
              </ArticleLink>
            </li>
          )
        })}
      </ul>
    </>
  )

  render = () => {
    const { campaign, user = {} } = this.context
    const { favorites = [], sheets = [] } = user

    if (!campaign) return null

    const navigation = campaign.navigation.map(link => ({
      ...link,
      campaign: pluck(campaign, '_id', 'domain', 'title'),
    }))
    // eslint-disable-next-line no-shadow
    const campaigns = (user.campaigns || []).map(campaign => ({ campaign, title: campaign.title }))

    return (
      <div className="navigation">
        {this.renderList(navigation, campaign.title)}
        {user && <>
          {this.renderList(campaigns, 'My Campaigns', 'campaign')}
          {this.renderList(favorites, 'My Favorites')}
          {this.renderList(sheets, 'My Sheets', 'sheet')}
        </>}
      </div>
    )
  }
}
