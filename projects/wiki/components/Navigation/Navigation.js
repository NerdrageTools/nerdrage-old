import ArticleLink from '@nerdrage/wiki/components/ArticleLink'
import CampaignContext from '@nerdrage/wiki/contexts/Campaign'
import React, { Component } from 'react'
import './Navigation.scss'

export default class Navigation extends Component {
  static contextType = CampaignContext
  static defaultProps = {
    items: [],
  }

  render = () => (
    <div className="navigation">
      {this.context.navigation.map(({ slug, text }, key) => (
        <ArticleLink key={key} slug={slug}>{text}</ArticleLink>
      ))}
    </div>
  )
}
