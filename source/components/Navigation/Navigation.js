import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import Sortable from 'sortablejs'
import PageLink from '@/components/PageLink'
import Application from '@/contexts/Application'
import EditIcon from '@/icons/edit.svg'
import FavoriteIcon from '@/icons/favorite-on.svg'
import DeleteIcon from '@/icons/remove.svg'
import SheetIcon from '@/icons/sheet.svg'
import noop from '@/utilities/noop'
import pluck from '@/utilities/pluck'
import prompt from '@/utilities/prompt'
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

  handleAddKeyDown = event => {
    const title = event.target.value.trim()
    const { navigation } = this.context.campaign

    if (event.key === 'Enter' && title !== '') {
      event.target.value = ''
      this.context.updateCampaign({
        navigation: [...navigation, { title }],
      })
    }
  }
  handleDelete = ({ currentTarget }) => {
    const id = currentTarget.getAttribute('data-id')
    const { navigation } = this.context.campaign

    this.context.updateCampaign({
      navigation: navigation.filter(item => item._id !== id),
    })
  }
  handleEdit = async ({ currentTarget }) => {
    const id = currentTarget.getAttribute('data-id')
    const navigation = [...this.context.campaign.navigation]
    const item = navigation.find(navItem => navItem._id === id)
    if (!item) return undefined

    try {
      const title = await prompt('New Title?', { defaultValue: item.title, title: 'Set Title' })
      if (!title) return undefined

      const slug = await prompt('Slug to link to?', { defaultValue: item.slug, title: 'Set Slug' })

      navigation.splice(navigation.indexOf(item), 1, { slug, title })
      this.context.updateCampaign({ navigation })
    } catch (_) {}

    return undefined
  }

  renderList = (list = [], listTitle = '', type = 'article', campaignLink = null) => <>
    {campaignLink}
    {!campaignLink && Boolean(list.length) && <b>{listTitle}</b>}
    <ul>
      {list.map(({ _id, campaign, slug, title }, index) => {
        const { subdomain = '', title: cTitle = '' } = (campaign || this.context.campaign || {})
        let text = title
        if (type !== 'campaign' && subdomain && subdomain !== this.context.subdomain) {
          text += ` (${cTitle || subdomain})`
        }

        if (!slug) {
          return (
            <li key={_id || index} className="section" data-id={_id} title={title}>
              <b>{text}</b>
              {this.context.campaign.isEditor && (
                <div className="controls">
                  <EditIcon className="edit" data-id={_id} onClick={this.handleEdit} />
                  <DeleteIcon className="delete" data-id={_id} onClick={this.handleDelete} />
                </div>
              )}
            </li>
          )
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
            {this.context.campaign.isEditor && (
              <div className="controls">
                <EditIcon className="edit" data-id={_id} onClick={this.handleEdit} />
                <DeleteIcon className="delete" data-id={_id} onClick={this.handleDelete} />
              </div>
            )}
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
          {campaign.isEditor && (
            <input
              type="text"
              className="add-navigation"
              onKeyDown={this.handleAddKeyDown}
              placeholder="Add..."
            />
          )}
        </div>
      </Scrollbars>
    )
  }
}
