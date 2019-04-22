import React, { Component } from 'react'
import FlyoutMenu, { MenuItem } from '@/components/FlyoutMenu'
import Application from '@/contexts/Application'
import ArticleIcon from '@/icons/read.svg'
import SheetIcon from '@/icons/sheet.svg'
import alert from '@/utilities/alert'
import promptLink from '@/utilities/promptLink'
import './CreateMenu.scss'

export default class CreateMenu extends Component {
  static contextType = Application

  flyoutMenu = React.createRef()

  handleNew = type => async () => {
    this.flyoutMenu.current.close()

    const lowered = type.toLowerCase()
    try {
      const { slug, templateSlug, text } = await promptLink({
        defaultSlug: `new-${lowered}`,
        defaultText: `New ${type}`,
        templateType: type,
        title: `New ${type}...`,
      })

      let href = `/${lowered}?slug=${slug}&title=${text}`
      let asUrl = `/${lowered}/${slug}?title=${text}`

      if (templateSlug) {
        href += `&template=${templateSlug}`
        asUrl += `&template=${templateSlug}`
      }

      this.context.router.push(href, asUrl)
    } catch (error) { }
  }
  handleNewCampaign = async () => {
    const { rootUrl } = this.context
    this.flyoutMenu.current.close()

    try {
      const { slug, text } = await promptLink({
        defaultSlug: 'new-campaign',
        defaultText: 'New Campaign',
        slugLabel: 'Subdomain',
        textLabel: 'Title',
        title: 'New Campaign...',
      })

      const response = await fetch(`/api/campaign/${slug}`, {
        body: JSON.stringify({ subdomain: slug, title: text }),
        credentials: 'include',
        method: 'PUT',
      })
      if (response.status === 201) {
        this.context.router.push(`//${slug}.${rootUrl}/campaign`, `//${slug}.${rootUrl}/campaign`)
      } else {
        const json = await response.json()
        alert(json.message, 'Error')
      }
    } catch (error) { }
  }

  render = () => {
    const { children } = this.props
    const { isEditor, isParticipant } = this.context.campaign || {}
    const { isAdmin } = this.context.user || {}

    return (
      <FlyoutMenu className="create" ref={this.flyoutMenu}>
        {isAdmin && (
          <MenuItem onClick={this.handleNewCampaign}>
            <SheetIcon /> New Campaign...
          </MenuItem>
        )}
        {isEditor && (
          <MenuItem onClick={this.handleNew('Article')}>
            <ArticleIcon /> New Article...
          </MenuItem>
        )}
        {isParticipant && (
          <MenuItem onClick={this.handleNew('Sheet')}>
            <SheetIcon /> New Sheet...
          </MenuItem>
        )}
        <hr />
        {children}
      </FlyoutMenu>
    )
  }
}
