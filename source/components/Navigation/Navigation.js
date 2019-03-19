import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import Sortable from 'sortablejs'
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
    wrapperRef: noop,
  }

  campaignNav = React.createRef()

  componentDidMount() { this.initializeSortable() }
  componentDidUpdate() { this.initializeSortable() }

  get isCampaignEditor() {
    return Boolean(this.context.campaign && this.context.campaign.isEditor)
  }

  initializeSortable = () => {
    if (this.sortable) this.sortable.destroy()
    const ul = this.campaignNav.current.querySelector('ul')
    const { navigation } = this.context.campaign

    this.sortable = Sortable.create(ul, {
      disabled: !this.isCampaignEditor,
      dragClass: 'dragging',
      draggable: 'li',
      onEnd: () => {
        const updated = [...ul.querySelectorAll('li')]
          .map(li => li.getAttribute('data-id'))
          .map(id => navigation.find(navLink => navLink._id === id))
          .filter(Boolean)

        this.context.updateCampaign({ navigation: updated })
      },
    })
  }

  renderList = (list = [], listTitle = '', type = 'article') => <>
    {Boolean(list.length) && <b>{listTitle}</b>}
    <ul>
      {list.filter(item => item.campaign.domain === this.context.campaign.domain)
        .map(({ _id, campaign = {}, slug, title }, index) => {
          const { domain = '', title: cTitle = '' } = campaign
          let text = title
          if (type !== 'campaign' && domain && domain !== this.context.domain) {
            text += ` (${cTitle || domain})`
          }

          return (
            <li key={_id || index} data-id={_id}>
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

  render = () => {
    const { campaign, user = {} } = this.context
    const { favorites = [], sheets = [] } = user

    if (!campaign) return null

    const navigation = campaign.navigation.map(link => ({
      ...link,
      campaign: pluck(campaign, '_id', 'domain', 'title'),
    }))

    return (
      <Scrollbars className="navigation" autoHide universal>
        <div className="content" ref={this.props.wrapperRef}>
          <div className="campaign-nav" ref={this.campaignNav}>
            {this.renderList(navigation, campaign.title)}
          </div>
          {user && <>
            {this.renderList(favorites, 'My Favorites')}
            {this.renderList(sheets, 'My Sheets', 'sheet')}
          </>}
        </div>
      </Scrollbars>
    )
  }
}
