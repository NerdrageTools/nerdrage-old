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
    const { navigation } = this.context.campaign
    const { asPath } = this.context.router

    return (
      <div className="navigation">
        {navigation.map(({ slug, text }, key) => (
          <ArticleLink key={key} slug={slug} active={asPath === `/article/${slug}`}>{text}</ArticleLink>
        ))}
      </div>
    )
  }
}
