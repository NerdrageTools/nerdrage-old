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
import pluck from '@/utilities/pluck'
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
    aliases: this.props.aliases,
    html: this.props.html,
    secret: this.props.secret,
    tags: this.props.tags,
    title: this.props.title,
  }

  get isDirty() {
    const propsToCompare = ['aliases', 'html', 'secret', 'title', 'tags']
    const fromState = JSON.stringify(pluck(this.state, propsToCompare))
    const fromProps = JSON.stringify(pluck(this.props, propsToCompare))

    return fromState !== fromProps
  }

  handleHtmlChange = html => this.setState({ html })
  handleSave = async () => {
    const updated = await fetch(`/api/article/${this.props.slug}`, {
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    }).then(r => r.json())
    this.setState(updated)
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

    return (
      <div className="article page">
        <Editable
          className="title"
          onChange={this.handleTitleChange}
          readOnly={!isEditable}
          value={title}
        />
        <TabSet
          activeTabId={activeTab}
          buttons={(
            <>
              {this.isDirty && <button onClick={this.handleSave}>Save</button>}
            </>
          )}
          onTabClicked={this.handleTabClicked}
          showTabs={isEditable}
          tabs={[{
            contents: this.renderReadOnlyContent(),
            id: 'read',
            tab: <ReadIcon />,
          }, {
            contents: <WysiwygEditor html={html} onChange={this.handleHtmlChange} />,
            id: 'edit',
            tab: <EditIcon />,
          }, {
            contents: <HtmlEditor value={html} onChange={this.handleHtmlChange} />,
            id: 'html',
            tab: <HtmlIcon />,
          }]}
        />
      </div>
    )
  }
}
