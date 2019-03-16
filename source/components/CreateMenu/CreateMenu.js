import React, { Component } from 'react'
import FlyoutMenu, { MenuItem } from '@/components/FlyoutMenu'
import Application from '@/contexts/Application'
import prompt from '@/utilities/prompt'
import { slugify } from '@/utilities/slugs'

export default class CreateMenu extends Component {
  static contextType = Application

  handleNewArticle = async () => {
    try {
      const title = await prompt('What would you like to name your new article?', {
        defaultValue: 'New Article',
        title: 'Article Name',
      })
      const slug = slugify(await prompt('What would you like the slug to be?', {
        defaultValue: slugify(title),
        regex: /^[a-z0-9-]*$/i,
        title: 'Article Slug',
      }))

      this.context.router.push(
        `/article?slug=${slug}&title=${title}`,
        `/article/${slug}?title=${title}`
      )
    } catch (error) { }
  }

  render = () => {
    const { children } = this.props
    return (
      <FlyoutMenu className="create" open>
        <MenuItem onClick={this.handleNewArticle}>New Article...</MenuItem>
        <hr />
        {children}
      </FlyoutMenu>
    )
  }
}
