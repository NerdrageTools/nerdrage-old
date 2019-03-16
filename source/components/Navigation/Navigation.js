import React, { Component } from 'react'
import ArticleLink from '@/components/ArticleLink'
import Application from '@/contexts/Application'
import './Navigation.scss'

export default class Navigation extends Component {
  static contextType = Application
  static defaultProps = {
    items: [],
  }

  render = () => {
    const { campaign } = this.context
    const { asPath } = this.context.router

    if (!campaign) {
      return null
    }

    return (
      <div className="navigation">
        {campaign.navigation.map(({ slug, text }, key) => (
          <ArticleLink key={key} slug={slug} active={asPath === `/article/${slug}`}>{text}</ArticleLink>
        ))}
      </div>
    )
  }
}
