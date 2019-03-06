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
    return (
      <div className="navigation">
        {navigation.map(({ slug, text }, key) => (
          <ArticleLink key={key} slug={slug}>{text}</ArticleLink>
        ))}
      </div>
    )
  }
}
