import fetch from 'isomorphic-unfetch'
import dynamic from 'next/dynamic'
import React, { Component } from 'react'
import JsxParser from 'react-jsx-parser'
import Alert from '@/components/Alert'
import Editable from '@/components/Editable'
import Link from '@/components/Link'
import PageLinkList from '@/components/PageLinkList'
import TabSet from '@/components/TabSet'
import TagBar from '@/components/TagBar'
import Toggle from '@/components/Toggle'
import Application from '@/contexts/Application'
import EditIcon from '@/icons/edit.svg'
import FavoriteOffIcon from '@/icons/favorite-off.svg'
import FavoriteOnIcon from '@/icons/favorite-on.svg'
import HtmlIcon from '@/icons/html.svg'
import NavigationIcon from '@/icons/Navigation'
import PublicIcon from '@/icons/public.svg'
import ReadIcon from '@/icons/read.svg'
import SecretIcon from '@/icons/secret.svg'
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
  '_id',
  'aliases',
  'html',
  'isOwner',
  'isEditable',
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
    editMode: false,
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
  get isNavLink() {
    const { campaign = {} } = this.context
    if (!campaign.navigation || !campaign.navigation.length) return false
    return Boolean(campaign.navigation.find(n => n.slug === this.props.slug))
  }

  handleAliasesChange = aliases => this.setState({ aliases })
  handleDelete = async () => {
    if (!await confirm('Are you sure you want to permanently delete this article?')) return
    await fetch(`/api/article/${this.props.slug}`, { method: 'DELETE' })
    const article = await fetch(`/api/article/${this.props.slug}`)
    const json = {
      ...pluck(await article.json(), STATE_FIELDS),
      _id: null,
      title: this.context.router.query.title || '',
    }

    this.setState({ ...json, activeTab: 'read', saved: json })
    this.context.updateUser()
  }
  handleHtmlChange = html => this.setState({ html })
  handleReset = () => {
    this.setState({ activeTab: 'read', ...this.state.saved })
  }
  handleSave = async () => {
    const saved = await fetch(`/api/article/${this.props.slug}`, {
      body: JSON.stringify(pluck(this.state, STATE_FIELDS)),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    }).then(r => r.json())
    this.setState({ ...saved, saved })
    this.context.updateUser()
  }
  handleTabClicked = tab => {
    if (tab !== this.state.activeTab) {
      this.setState({ activeTab: tab })
    }
  }
  handleTagsChange = tags => this.setState({ tags })
  handleTitleChange = title => this.setState({ title })
  handleToggleEditMode = () => this.setState({ editMode: !this.state.editMode })
  handleToggleFavorite = async () => {
    const updated = await fetch(`/api/user/my/favorites/${this.props.slug}`, {
      method: 'POST',
    }).then(r => r.json())
    this.context.setUser(updated)
  }
  handleToggleNavigation = async () => {
    const { slug, title } = this.props
    const { campaign } = this.context
    if (!campaign) { return }

    let navigation = (campaign.navigation || [])
    if (this.isNavLink) {
      navigation = navigation.filter(n => n.slug !== slug)
    } else {
      navigation.push({ slug, title })
    }

    this.context.updateCampaign({ navigation })
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
    <JsxParser components={{ a: Link }} jsx={(this.state.html || this.props.html || '').trim()} />
    <PageLinkList pages={this.props.childArticles} />
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
    const {
      _id, activeTab, aliases, html, isEditable, isOwner,
      message, redirectedFrom, secret, slug, tags, title = '',
    } = this.state
    const { httpStatusCode } = this.props
    const { favorites = [] } = this.context.user
    const { campaign = {} } = this.context
    const isFavorite = favorites.find(f => (
      f.campaign.domain === campaign.domain
      && f.slug === slug
    ))
    const readOnly = !isEditable || !this.state.editMode

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
            className={`title ${title.trim() ? '' : 'default'}`}
            onChange={this.handleTitleChange}
            placeholder={slug}
            readOnly={readOnly}
            value={readOnly ? this.state.saved.title : title}
          />
          {redirectedFrom && (
            <div className="redirected-from">Redirected From: <b>{redirectedFrom}</b></div>
          )}
          {_id && isOwner && (
            <Toggle
              className="secret" value={secret}
              offIcon={PublicIcon} onIcon={SecretIcon}
              onToggle={this.handleToggleSecret}
            />
          )}
          {_id && campaign.isEditor && (
            <Toggle
              className="in-navigation" value={this.isNavLink}
              offIcon={NavigationIcon} offProps={{ title: 'Not Added to Site Navigation' }}
              onIcon={NavigationIcon} onProps={{ title: 'Added to Site Navigation' }}
              onToggle={this.handleToggleNavigation}
            />
          )}
          {campaign.isEditor && (
            <Toggle
              className="edit-mode" value={this.state.editMode}
              offIcon={EditIcon} onIcon={EditIcon}
              onToggle={this.handleToggleEditMode}
            />
          )}
          {_id && (
            <Toggle
              className="favorite"
              offIcon={FavoriteOffIcon} onIcon={FavoriteOnIcon}
              onToggle={this.handleToggleFavorite}
              value={isFavorite}
            />
          )}
          {this.isDirty && campaign.isEditor && (
            <button className="safe" onClick={this.handleSave}>Save</button>
          )}
          {_id && this.isDirty && campaign.isEditor && (
            <button className="safe" onClick={this.handleReset}>Reset</button>
          )}
        </div>
        <TabSet
          activeTabId={activeTab}
          onTabClicked={this.handleTabClicked}
          showTabs={!readOnly}
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
        {(tags.length || !readOnly) && (
          <TagBar
            asLinks
            banned={[slug, ...aliases]}
            className="tags"
            onChange={this.handleTagsChange}
            tags={tags}
            readOnly={readOnly}
          />
        )}
      </div>
    )
  }
}
