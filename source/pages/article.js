import fetch from 'isomorphic-unfetch'
import dynamic from 'next/dynamic'
import React, { Component } from 'react'
import JsxParser from 'react-jsx-parser'
import Alert from '@/components/Alert'
import ArticleChildren from '@/components/ArticleChildren'
import Editable from '@/components/Editable'
import Link from '@/components/Link'
import TabSet from '@/components/TabSet'
import TagBar from '@/components/TagBar'
import Toggle from '@/components/Toggle'
import Application from '@/contexts/Application'
import EditIcon from '@/icons/edit.svg'
import FavoriteOffIcon from '@/icons/favorite-off.svg'
import FavoriteOnIcon from '@/icons/favorite-on.svg'
import HtmlIcon from '@/icons/html.svg'
import SecretOnIcon from '@/icons/private.svg'
import SecretOffIcon from '@/icons/public.svg'
import ReadIcon from '@/icons/read.svg'
import SettingsIcon from '@/icons/settings.svg'
import confirm from '@/utilities/confirm'
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
    childArticles: [],
    html: '',
    httpStatusCode: 200,
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
      const saved = pluck(props, STATE_FIELDS)
      return {
        activeTab: 'read',
        ...saved,
        saved,
        title: props.title || new URLSearchParams(window.location.search).get('title') || '',
      }
    }

    return state
  }

  state = {
    activeTab: 'read',
    ...pluck(this.props, STATE_FIELDS),
    saved: this.props._id ? pluck(this.props, STATE_FIELDS) : {},
    title: this.props.title || this.context.router.query.title,
  }

  componentDidMount() {
    const { slug } = this.props
    const { router } = this.context
    if (router.query.slug !== slug) {
      this.setState({ redirectedFrom: router.query.slug })
      router.push(`/article?slug=${slug}`, `/article/${slug}`, { shallow: true })
    }
  }

  get isDirty() {
    const fromState = JSON.stringify(pluck(this.state, STATE_FIELDS))
    const fromSaved = JSON.stringify(pluck(this.state.saved, STATE_FIELDS))

    return fromState !== fromSaved
  }

  handleAliasesChange = aliases => this.setState({ aliases })
  handleDelete = async () => {
    if (!await confirm('Are you sure you want to permanently delete this article?')) return
    const response = await fetch(`/api/article/${this.props.slug}`, { method: 'DELETE' })
    if (response.status === 204) {
      this.context.router.push('/article/home')
    }
  }
  handleHtmlChange = html => this.setState({ html })
  handleSave = async () => {
    const saved = await fetch(`/api/article/${this.props.slug}`, {
      body: JSON.stringify(pluck(this.state, STATE_FIELDS)),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    }).then(r => r.json())
    this.setState({ ...saved, saved })
  }
  handleTabClicked = tab => {
    if (tab !== this.state.activeTab) {
      this.setState({ activeTab: tab })
    }
  }
  handleTagsChange = tags => this.setState({ tags })
  handleTitleChange = title => this.setState({ title })
  handleToggleFavorite = async () => {
    const updated = await fetch(`/api/user/favorites/${this.props.slug}`, { method: 'POST' })
      .then(r => r.json())
    this.context.setUser(updated)
  }
  handleToggleSecret = async () => {
    const payload = { secret: !this.state.secret }
    const response = await fetch(`/api/article/${this.props.slug}`, {
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
    const updated = pluck(await response.json(), 'secret')
    if (response.status === 200) {
      this.setState({ ...updated, saved: { ...this.state.saved, ...updated } })
    }
  }

  renderReadOnlyContent = () => <>
    <JsxParser components={{ a: Link }} jsx={this.state.html || this.props.html} />
    <ArticleChildren articles={this.props.childArticles} />
  </>
  renderSettingsTab = () => <>
    <fieldset>
      <legend>Aliases</legend>
      <TagBar
        banned={[this.state.slug]}
        className="aliases"
        onChange={this.handleAliasesChange}
        tags={this.state.aliases}
        inputSettings={{ placeholder: 'add alias' }}
        readOnly={!this.props.isEditable}
      />
    </fieldset>
    {this.props.isEditable && (
      <fieldset className="danger">
        <legend className="danger">Danger</legend>
        <div className="row">
          <button className="danger" onClick={this.handleDelete}>Delete</button>
          <span>Warning: This cannot be undone.</span>
        </div>
      </fieldset>
    )}
  </>
  render = () => {
    const { activeTab, aliases, html, redirectedFrom, secret, tags, title } = this.state
    const { campaign = {}, httpStatusCode, isEditable, isOwner, message, slug } = this.props
    const { favorites = [] } = this.context.user
    const isFavorite = favorites.find(f => (
      f.campaign.domain === campaign.domain
      && f.slug === slug
    ))

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
          {redirectedFrom && (
            <div className="redirected-from">Redirected From: <b>{redirectedFrom}</b></div>
          )}
          {isOwner &&
            <Toggle
              className="secret"
              offIcon={SecretOffIcon}
              onIcon={SecretOnIcon}
              onToggle={this.handleToggleSecret}
              value={secret}
            />
          }
          <Toggle
            className="favorite"
            offIcon={FavoriteOffIcon}
            onIcon={FavoriteOnIcon}
            onToggle={this.handleToggleFavorite}
            value={isFavorite}
          />
        </div>
        <TabSet
          activeTabId={activeTab}
          buttons={<>
            {this.isDirty && <button className="safe" onClick={this.handleSave}>Save</button>}
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
          }, {
            contents: this.renderSettingsTab(),
            id: 'settings',
            tab: <SettingsIcon />,
          }].filter(Boolean)}
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
