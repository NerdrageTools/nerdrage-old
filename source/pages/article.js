import fetch from 'isomorphic-unfetch'
import dynamic from 'next/dynamic'
import React, { Component } from 'react'
import JsxParser from 'react-jsx-parser'
import Alert from '@/components/Alert'
import ArticleChildren from '@/components/ArticleChildren'
import Editable from '@/components/Editable'
import Favorite from '@/components/Favorite'
import Link from '@/components/Link'
import TabSet from '@/components/TabSet'
import TagBar from '@/components/TagBar'
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

const STATE_FIELDS = [
  'aliases',
  'html',
  'secret',
  'slug',
  'tags',
  'title',
]

export default class Article extends Component {
  static contextType = Application
  static defaultProps = {
    children: [],
    html: '',
    message: '',
    title: '',
  }
  static getInitialProps = async ({ query, req }) => {
    const headers = pluck(req && req.headers, 'cookie')
    const result = await fetch(URI(req, `/api/article/${query.slug}`), { headers })
    const json = await result.json()
    return {
      httpStatusCode: result.status,
      ...json,
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.slug !== state.slug) {
      return { activeTab: 'read', ...pluck(props, STATE_FIELDS) }
    }

    return state
  }

  state = { activeTab: 'read', ...pluck(this.props, STATE_FIELDS) }

  get isDirty() {
    const propsToCompare = ['aliases', 'html', 'secret', 'title', 'tags']
    const fromState = JSON.stringify(pluck(this.state, propsToCompare))
    const fromProps = JSON.stringify(pluck(this.props, propsToCompare))

    return fromState !== fromProps
  }

  handleFavoriteToggle = async () => {
    const updated = await fetch(`/api/user/favorites/${this.props.slug}`, { method: 'POST' })
      .then(r => r.json())
    this.context.setUser(updated)
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
    if (tab !== this.state.activeTab) {
      this.setState({ activeTab: tab })
    }
  }
  handleTagsChange = tags => this.setState({ tags })
  handleTitleChange = title => this.setState({ title })

  renderReadOnlyContent = () => (
    <>
      <JsxParser components={{ a: Link }} jsx={this.state.html || this.props.html} />
      <ArticleChildren articles={this.props.children} />
    </>
  )
  render = () => {
    const { activeTab } = this.state
    const { campaign = {}, httpStatusCode, isEditable, message, slug } = this.props
    const { favorites = [] } = this.context.user
    const aliases = this.state.aliases || this.props.aliases
    const html = this.state.html || this.props.html
    const title = this.state.title || this.props.title
    const isFavorite = favorites.includes(`${campaign.domain}:${slug}`)
    const tags = this.state.tags || this.props.tags

    if (httpStatusCode !== 200) {
      return (
        <div className="article page">
          <Alert type="error">{message}</Alert>
        </div>
      )
    }

    return (
      <div className="article page">
        {message && <Alert>{message}</Alert>}
        <div className="title-bar">
          <Editable
            className="title"
            onChange={this.handleTitleChange}
            readOnly={!isEditable}
            value={title}
          />
          <Favorite onToggle={this.handleFavoriteToggle} value={isFavorite} />
        </div>
        <TabSet
          activeTabId={activeTab}
          buttons={<>
            {this.isDirty && <button onClick={this.handleSave}>Save</button>}
          </>}
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
        <TagBar
          asLinks
          banned={[slug, ...aliases]}
          className="tags"
          onChange={this.handleTagsChange}
          tags={tags}
          readOnly={!isEditable}
        />
      </div>
    )
  }
}
