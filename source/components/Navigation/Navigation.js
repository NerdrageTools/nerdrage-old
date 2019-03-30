import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import Sortable from 'sortablejs'
import PageLink from '@/components/PageLink'
import Application from '@/contexts/Application'
import FavoriteIcon from '@/icons/favorite-on.svg'
import SheetIcon from '@/icons/sheet.svg'
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
    if (!this.campaignNav.current) return
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

  renderList = (list = [], listTitle = '', type = 'article', campaignLink = null) => <>
    {campaignLink}
    {!campaignLink && Boolean(list.length) && <b>{listTitle}</b>}
    <ul>
      {list.map(({ _id, campaign = {}, slug, title }, index) => {
        const { subdomain = '', title: cTitle = '' } = campaign
        let text = title
        if (type !== 'campaign' && subdomain && subdomain !== this.context.subdomain) {
          text += ` (${cTitle || subdomain})`
        }

        return (
          <li key={_id || index} data-id={_id} title={title}>
            <PageLink
              {...{ campaign, slug, type }}
              active={this.context.subdomain === subdomain && this.context.router.asPath === `/${type}/${slug}`}
              onClick={this.props.onItemClick}
            >
              {text}
            </PageLink>
          </li>
        )
      })}
    </ul>
  </>

  filterLinks = link => link.campaign.subdomain === this.context.campaign.subdomain
  render = () => {
    const { campaign, user = {} } = this.context
    let { favorites = [], sheets = [] } = user

    if (!campaign || !campaign.navigation) return null

    const navigation = campaign.navigation.map(link => ({
      ...link,
      campaign: pluck(campaign, '_id', 'subdomain', 'title'),
    }))
    favorites = favorites.filter(this.filterLinks)
    sheets = sheets.filter(this.filterLinks)

    return (
      <Scrollbars className="navigation" autoHide universal>
        <div className="content" ref={this.props.wrapperRef}>
          <div className="campaign-nav" ref={this.campaignNav}>
            {this.renderList(navigation, campaign.title, 'article', <b>
              <PageLink subdomain={campaign.subdomain} type="campaign">
                {campaign.title}
              </PageLink>
            </b>)}
          </div>
          {user && <>
            {Boolean(favorites.length) && (
              this.renderList(favorites, <><FavoriteIcon /> Favorites</>)
            )}
            {Boolean(sheets.length) && (
              this.renderList(sheets, <><SheetIcon /> Sheets</>, 'sheet')
            )}
          </>}
        </div>
      </Scrollbars>
    )
  }
}
