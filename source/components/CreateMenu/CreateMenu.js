import React, { Component } from 'react'
import FlyoutMenu, { MenuItem } from '@/components/FlyoutMenu'
import Application from '@/contexts/Application'
import ArticleIcon from '@/icons/read.svg'
import SheetIcon from '@/icons/sheet.svg'
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
        title: `New ${lowered}...`,
      })

      this.context.router.push(
        `/${lowered}?slug=${slug}&title=${text}&template=${templateSlug}`,
        `/${lowered}/${slug}?title=${text}&template=${templateSlug}`
      )
    } catch (error) { }
  }

  render = () => {
    const { children } = this.props
    const { isEditor, isParticipant } = this.context.campaign || {}

    return (
      <FlyoutMenu className="create" ref={this.flyoutMenu}>
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
