import React, { Component } from 'react'
import FlyoutMenu, { MenuItem } from '@/components/FlyoutMenu'
import Application from '@/contexts/Application'
import ArticleIcon from '@/icons/read.svg'
import SheetIcon from '@/icons/sheet.svg'
import prompt from '@/utilities/prompt'
import { slugify } from '@/utilities/slugs'

export default class CreateMenu extends Component {
  static contextType = Application

  flyoutMenu = React.createRef()

  handleNew = type => async () => {
    this.flyoutMenu.current.close()

    const lowered = type.toLowerCase()
    try {
      const title = await prompt(`What would you like to name your new ${lowered}?`, {
        defaultValue: `New ${type}`,
        title: `${type} Name`,
      })
      const slug = slugify(await prompt('What would you like the slug to be?', {
        defaultValue: slugify(title),
        regex: /^[a-z0-9-]*$/i,
        title: `${type} Slug`,
      }))

      this.context.router.push(
        `/${lowered}?slug=${slug}&title=${title}`,
        `/${lowered}/${slug}?title=${title}`
      )
    } catch (error) { }
  }

  render = () => {
    const { children } = this.props
    return (
      <FlyoutMenu className="create" ref={this.flyoutMenu}>
        <MenuItem onClick={this.handleNew('Article')}>
          <ArticleIcon /> New Article...
        </MenuItem>
        <MenuItem onClick={this.handleNew('Sheet')}>
          <SheetIcon /> New Sheet...
        </MenuItem>
        <hr />
        {children}
      </FlyoutMenu>
    )
  }
}
