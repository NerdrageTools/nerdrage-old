import EditIcon from 'core/icons/edit.svg'
import HtmlIcon from 'core/icons/html.svg'
import ReadIcon from 'core/icons/read.svg'
import fetch from 'isomorphic-unfetch'
import dynamic from 'next/dynamic'
import React, { Component } from 'react'
import JsxParser from 'react-jsx-parser'
import ArticleChildren from '@/components/ArticleChildren'
import TabSet from '@/components/TabSet'
import URI from '@/utilities/URI'
import './article.scss'

let HtmlEditor = () => <div />
let WysiwygEditor = () => <div />

if (process.browser && window) {
  HtmlEditor = dynamic(() => import('@/components/HtmlEditor'))
  WysiwygEditor = dynamic(() => import('@/components/WysiwygEditor'))
}

export default class Article extends Component {
  static defaultProps = {
    children: [],
    html: '',
    title: '',
  }
  static getInitialProps = async ({ query, req }) => (
    fetch(URI(req, `/api/wiki/${query.slug}`)).then(r => r.json())
  )

  state = {
    activeTab: 'read',
  }

  handleChangeHtml = (html) => {

  }
  handleTabClicked = (tab) => {
    if (tab !== this.state.activeTab) { this.setState({ activeTab: tab }) }
  }

  render() {
    const { children, html, title } = this.props
    const { activeTab } = this.state

    return (
      <div className="article page">
        <div className="title">{title}</div>
        <TabSet
          activeTabId={activeTab}
          onTabClicked={this.handleTabClicked}
          showTabs
          tabs={[{
            contents: <>
              <JsxParser jsx={html} />
              <ArticleChildren articles={children} />
            </>,
            id: 'read',
            tab: <><ReadIcon style={{ marginRight: 5 }} /> Article</>,
          }, {
            contents: <WysiwygEditor html={html} onChange={this.handleChangeHtml} />,
            id: 'edit',
            tab: <EditIcon />,
          }, {
            contents: <HtmlEditor value={html} onChange={this.handleChangeHtml} />,
            id: 'html',
            tab: <HtmlIcon />,
          }]}
        />
      </div>
    )
  }
}
