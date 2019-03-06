import fetch from 'isomorphic-unfetch'
import dynamic from 'next/dynamic'
import React, { Component } from 'react'
import JsxParser from 'react-jsx-parser'
import ArticleChildren from '@/components/ArticleChildren'
import Editable from '@/components/Editable'
import TabSet from '@/components/TabSet'
import Application from '@/contexts/Application'
import EditIcon from '@/icons/edit.svg'
import HtmlIcon from '@/icons/html.svg'
import ReadIcon from '@/icons/read.svg'
import URI from '@/utilities/URI'
import './article.scss'

let HtmlEditor = () => <div />
let WysiwygEditor = () => <div />

if (process.browser && window) {
  WysiwygEditor = dynamic(() => import('@/components/WysiwygEditor'))
  HtmlEditor = dynamic(() => import('@/components/HtmlEditor'))
}

export default class Article extends Component {
  static contextType = Application
  static defaultProps = {
    children: [],
    html: '',
    title: '',
  }
  static getInitialProps = async ({ query, req }) => {
    const headers = req ? { cookie: req.headers.cookie } : {}
    return fetch(URI(req, `/api/article/${query.slug}`), { headers }).then(r => r.json())
  }

  state = {
    activeTab: 'read',
  }

  handleChangeHtml = html => {
    this.setState({ html })
  }
  handleTabClicked = tab => {
    if (tab !== this.state.activeTab) { this.setState({ activeTab: tab }) }
  }
  handleTitleChange = title => this.setState({ title })

  renderReadOnlyContent = () => (
    <>
      <JsxParser jsx={this.state.html || this.props.html} />
      <ArticleChildren articles={this.props.children} />
    </>
  )

  render() {
    const { isEditable } = this.props
    const { activeTab } = this.state
    const html = this.state.html || this.props.html
    const title = this.state.title || this.props.title

    if (!isEditable) {
      return (
        <div className="article page">
          <h1>{title}</h1>
          {this.renderReadOnlyContent()}
        </div>
      )
    }

    return (
      <div className="article page">
        <Editable
          className="title"
          onChange={this.handleTitleChange}
          value={title}
        />
        <TabSet
          activeTabId={activeTab}
          buttons={(
            <>
              <button>Save</button>
            </>
          )}
          onTabClicked={this.handleTabClicked}
          showTabs
          tabs={[{
            contents: this.renderReadOnlyContent(),
            id: 'read',
            tab: <ReadIcon />,
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
