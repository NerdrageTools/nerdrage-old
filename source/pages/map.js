import React, { Component } from 'react'
import Alert from '@/components/Alert'
import Editable from '@/components/Editable'
import IFrame from '@/components/IFrame'
import Toggle from '@/components/Toggle'
import Application from '@/contexts/Application'
import NavigationIcon from '@/icons/Navigation'
import PublicIcon from '@/icons/public.svg'
import SecretIcon from '@/icons/secret.svg'
import confirm from '@/utilities/confirm'
import pluck from '@/utilities/pluck'
import URI from '@/utilities/URI'
import './map.scss'


const STATE_FIELDS = [
  '_id',
  'checksum',
  'data',
  'isOwner',
  'isEditable',
  'secret',
  'slug',
  'svg',
  'title',
]
export default class Map extends Component {
  static contextType = Application
  static getInitialProps = async ({ query, req }) => {
    const headers = pluck(req && req.headers, 'cookie')
    const result = await fetch(URI(req, `/api/map/${query.slug}`), { headers })
    const json = await result.json()

    return {
      httpStatusCode: result.status,
      ...json,
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.slug !== state.slug) {
      const fields = pluck(props, STATE_FIELDS)
      const { title } = props || new URLSearchParams(window.location.search).get('title') || ''
      return {
        ...fields,
        title,
      }
    }

    return state
  }

  state = {
    ...pluck(this.props, STATE_FIELDS),
    generating: false,
  }

  handleDelete = async () => {
    const { router } = this.context
    const { slug } = this.props
    if (!await confirm('Are you sure you want to permanently delete this map?')) return
    await fetch(`/api/map/${slug}`, { method: 'DELETE' })
    const map = await fetch(`/api/map/${slug}`)
    const json = {
      ...pluck(await map.json(), STATE_FIELDS),
      _id: null,
      data: null,
      title: router.query.title || '',
    }

    this.context.updateUser()
    this.setState({ ...json, generating: false })
  }
  handleGenerate = () => this.setState({ generating: true })
  handleOnReady = async ({ window }) => {
    this.iframeWindow = window

    const { _id, checksum, data, generating } = this.state
    const { slug } = this.props

    if (data) {
      window.displayJsonData(data)
    } else if (_id) {
      this.setState({ loading: true })
      const map = await fetch(`/api/map/${slug}/${checksum}`, { credentials: 'include' })
        .then(response => response.json())
        .catch(() => null)
      if (map && map.data) {
        window.displayJsonData(map.data)
      }
      this.setState({ loading: false })
    } else if (generating) {
      window.regenerateMap(() => this.setState({ data: window.packageJsonData() }))
    }
  }
  handleSave = async () => {
    this.setState({ saving: true })
    const data = this.iframeWindow.packageJsonData()
    const saved = await fetch(`/api/map/${this.props.slug}`, {
      body: JSON.stringify({ ...pluck(this.state, STATE_FIELDS), data }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    }).then(r => r.json())
    this.setState({ ...saved, saving: false })
  }
  handleTitleChange = title => this.setState({ title })
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
    this.handleUpdate({ secret: !this.state.secret })
  }
  handleUpdate = async payload => {
    const keys = Object.keys(payload)
    const response = await fetch(`/api/map/${this.props.slug}`, {
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
    const updated = pluck(await response.json(), ...keys)
    if (response.status === 200) {
      this.setState(updated)
    }
  }

  render = () => {
    const { campaign } = this.context
    const { slug } = this.props
    const {
      _id, data, loading, generating, isEditable, isOwner, saving, secret, title,
    } = this.state

    let contents
    if (_id || (isEditable && generating)) {
      contents = (
        <IFrame
          bodyClasses={[isEditable ? 'editable' : 'readOnly']}
          className="map-frame"
          css={`
            .readOnly #viewbox, .readOnly #scaleBar {
              pointer-events: none;
            }
            .readOnly #optionsTab, .readOnly #toolsTab, .readOnly #regenerate {
              display: none!important;
            }
            #loading, #initial { display: none; }
          `}
          onReady={this.handleOnReady}
          src="/static/fantasy-map-generator"
          queryString={{ doNotGenerate: true }}
          title="map"
        />
      )
    } else if (isEditable) {
      contents = (
        <Alert className="center">
          {isEditable && <>
            {"This map doesn't exist. Would you like to "}
            <button className="safe" onClick={this.handleGenerate}>Generate It?</button>
          </>}
        </Alert>
      )
    } else {
      contents = (
        <Alert className="center">
          {"This map either doesn't exist, or you don't have permission to view it."}
        </Alert>
      )
    }

    return (
      <div className={`map page ${loading ? 'loading' : ''}`}>
        {!data && generating && <div className="generating">Generating map...</div>}
        <div className="title-bar">
          <Editable
            className={`title ${title.trim() ? '' : 'default'}`}
            onChange={this.handleTitleChange}
            placeholder={slug}
            readOnly={!isEditable}
            value={title}
          />
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
          {(data || generating) && isEditable && (
            <button className="safe" onClick={this.handleSave} disabled={saving}>Save</button>
          )}
          {_id && isEditable && (
            <button className="danger" onClick={this.handleDelete}>Delete</button>
          )}
        </div>
        {contents}
      </div>
    )
  }
}
