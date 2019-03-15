import { distanceInWordsToNow } from 'date-fns'
import React, { Component } from 'react'
import Alert from '@/components/Alert'
import ArticleChildren from '@/components/ArticleChildren'
import Editable from '@/components/Editable'
import Toggle from '@/components/Toggle'
import Application from '@/contexts/Application'
import AdminIcon from '@/icons/admin.svg'
import FavoriteIcon from '@/icons/favorite-on.svg'
import confirm from '@/utilities/confirm'
import pluck from '@/utilities/pluck'
import URI from '@/utilities/URI'
import './user.scss'

const UPDATABLE_FIELDS = ['email', 'favorites', 'name', 'username']
const formatTime = time => distanceInWordsToNow(time, { addSuffix: true })

export default class UserPage extends Component {
  static contextType = Application
  static defaultProps = {
    httpStatusCode: 200,
    message: '',
    user: undefined,
  }
  static getInitialProps = async ({ query, req }) => {
    const headers = pluck(req && req.headers, 'cookie')
    const result = await (fetch(URI(req, `/api/user/${query.username}`), { headers }))
    if (result.status !== 200) {
      return {
        httpStatusCode: result.status,
        ...await result.json(),
      }
    }

    return { user: await result.json() }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.user.username !== state.user.username) {
      return { user: props.user }
    }

    return state
  }

  state = {
    saved: pluck(this.props.user, UPDATABLE_FIELDS),
    user: this.props.user,
  }

  get isDirty() {
    const fromState = JSON.stringify(pluck(this.state.user, UPDATABLE_FIELDS))
    const fromSaved = JSON.stringify(pluck(this.state.saved, UPDATABLE_FIELDS))

    return (fromState !== fromSaved)
  }

  handleNameChange = name => this.setState({ user: { ...this.state.user, name } })
  handleSave = async () => {
    const response = await fetch(`/api/user/${this.state.user.username || ''}`, {
      body: JSON.stringify(pluck(this.state.user, UPDATABLE_FIELDS)),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    if (response.status === 200) {
      const saved = await response.json()
      return this.setState({ saved, user: { ...this.state.user, ...saved } })
    }

    return this.setState(await response.json())
  }
  handleToggleAdmin = async () => {
    const { isAdmin, username } = this.state.user
    const action = isAdmin ? 'revoke' : 'grant'
    if (await confirm(`Are you sure you want to ${action} this user Admin privileges?`)) {
      const response = await fetch(`/api/user/${username}`, {
        body: JSON.stringify({ isAdmin: !isAdmin }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      })
      if (response.status === 200) {
        return this.setState({ user: await response.json() })
      }

      return this.setState(await response.json())
    }

    return undefined
  }

  render = () => {
    const { httpStatusCode, message } = this.props
    const { user: currentUser } = this.context
    const { user } = this.state
    const isEditable = user === currentUser || currentUser.isAdmin

    if (httpStatusCode !== 200) {
      return (
        <div className="article page">
          <Alert type="error">{message}</Alert>
        </div>
      )
    }

    return (
      <div className="user page">
        <div className="title row">
          <Editable
            className="username"
            onChange={this.handleNameChange}
            placeholder="Name"
            readOnly={!isEditable}
            value={user.name}
          />
          {currentUser.isAdmin
            ? <Toggle
              className="is-admin"
              onClick={this.handleToggleAdmin}
              offIcon={AdminIcon}
              onIcon={AdminIcon}
              value={user.isAdmin}
            />
            : (user.isAdmin && <AdminIcon className="is-admin on" />)
          }
          {isEditable && this.isDirty && (
            <button className="update safe" onClick={this.handleSave}>Save Changes</button>
          )}
        </div>
        <hr />
        <div className="user-info">
          <div className="row">
            <b>Username:</b> <span>{user.username}</span>
          </div>
          {user.email && (
          <div className="row">
            <b>Email Address:</b> <span>{user.email}</span>
          </div>
          )}
          <div className="row">
            <b>Joined:</b>
            <span title={Date(user.createdAt).toLocaleString()}>{formatTime(user.createdAt)}</span>
          </div>
          <div className="row">
            <b>Last Login:</b>
            <span title={Date(user.lastLogin).toLocaleString()}>{formatTime(user.lastLogin)}</span>
          </div>
        </div>
        <hr />
        {user.favorites && (
          <ArticleChildren
            articles={user.favorites.map(favorite => ({
              slug: favorite.split(':').pop(),
              title: favorite,
            }))}
            caption="Favorites"
            icon={<FavoriteIcon className="favorites icon" />}
          />
        )}
      </div>
    )
  }
}
