import Editable from 'core/components/Editable'
import EditIcon from 'core/icons/edit.svg'
import HtmlIcon from 'core/icons/html.svg'
import ReadIcon from 'core/icons/read.svg'
import fetch from 'isomorphic-unfetch'
import dynamic from 'next/dynamic'
import React, { Component } from 'react'
import JsxParser from 'react-jsx-parser'
import ArticleChildren from 'wiki/components/ArticleChildren'
import TabSet from 'wiki/components/TabSet'
import URI from 'wiki/utilities/URI'
import './article.scss'

let HtmlEditor = () => <div />
let WysiwygEditor = () => <div />

if (process.browser && window) {
  WysiwygEditor = dynamic(() => import('@/components/WysiwygEditor'))
  HtmlEditor = dynamic(() => import('@/components/HtmlEditor'))
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
        <Editable className="title" defaultValue={title} />
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
