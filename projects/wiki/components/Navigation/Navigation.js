import React, { Component } from 'react'
import ArticleLink from '@/components/ArticleLink'
import CampaignContext from '@/contexts/Campaign'
import './Navigation.scss'

export default class Navigation extends Component {
  static contextType = CampaignContext
  static defaultProps = {
    items: [],
  }

  render = () => (
    <div className="navigation" style={{ borderColor: this.context.theme.primary }}>
      {this.context.navigation.map(({ slug, text }, key) => (
        <ArticleLink key={key} slug={slug}>{text}</ArticleLink>
      ))}
    </div>
  )
}
