import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import EditableList from '@/components/EditableList'
import PageLink from '@/components/PageLink'
import UserSearchBox from '@/components/SearchBox/UserSearchBox'
import NerdIcon from '@/icons/nerd.svg'
import RemoveIcon from '@/icons/remove.svg'
import compareBy from '@/utilities/compareBy'
import noop from '@/utilities/noop'
import pluck from '@/utilities/pluck'
import './Participants.scss'

const ORDER = {
  editor: 2,
  owner: 1,
  player: 3,
  removed: 4,
}

const addParticipants = (map, users, addition) => {
  users.forEach(user => {
    map.set(user._id, {
      ...(map.get(user._id) || user),
      ...user,
      ...addition,
    })
  })
}

export default class Participants extends Component {
  static defaultProps = {
    className: '',
    editors: [],
    onSave: noop,
    owners: [],
    players: [],
    readOnly: false,
    saving: false,
    title: 'Participants',
  }

  static getDerivedStateFromProps(props, state) {
    const { editors, owners, players } = props
    const { edits } = state

    const map = new Map()
    addParticipants(map, players, { level: 'player', order: ORDER.player })
    addParticipants(map, editors, { level: 'editor', order: ORDER.editor })
    addParticipants(map, owners, { level: 'owner', order: ORDER.owner })

    const current = Array.from(map.values()).sort(compareBy('order'))

    addParticipants(map, edits)
    const participants = Array.from(map.values()).sort(compareBy('order'))

    return { ...state, current, participants }
  }

  state = {
    edits: [],
    participants: [],
  }

  handleSetEdit = (user, edit = {}) => {
    const { current, edits } = this.state
    const exists = current.find(p => p._id === user._id)
    const currentEdit = edits.find(e => e._id === user._id) || {}

    const updated = edits.filter(e => e._id !== user._id)
    if (edit.type === 'added' && !exists) {
      updated.push({ ...user, ...edit, ...pluck(currentEdit, 'level', 'order') })
    }
    if (edit.type === 'removed' && exists && currentEdit.type !== 'removed') {
      updated.push({ ...user, ...edit, ...pluck(currentEdit, 'level', 'order') })
    }
    if (edit.type === 'updated') {
      updated.push({ ...user, ...edit })
    }

    this.setState({ edits: updated })
  }

  handleAddUser = user => {
    this.handleSetEdit(user, { level: 'player', order: ORDER.player, type: 'added' })
  }
  handleSetPermission = (user, level) => {
    this.handleSetEdit(user, { level, order: ORDER[level], type: 'updated' })
  }
  handleToggleRemoved = user => {
    this.handleSetEdit(user, { level: 'removed', order: ORDER.removed, type: 'removed' })
  }
  handleSave = () => {
    const { participants } = this.state
    this.props.onSave({
      editors: participants.filter(p => p.level === 'editor'),
      owners: participants.filter(p => p.level === 'owner'),
      players: participants.filter(p => p.level === 'player'),
    })
    this.setState({ edits: [] })
  }

  render = () => {
    const { className, readOnly, saving, title } = this.props
    const { participants } = this.state

    return (
      <div className={`participants ${className} ${saving ? 'loading' : ''}`}>
        <div className="title">{title}</div>
        <Scrollbars className="contents" universal>
          <ul className="participant-list">
            {participants.map(user => (
              <li className={`participant row ${user.type || ''}`} key={user._id}>
                <NerdIcon className="nerd icon" />
                <PageLink className="display" type="user" slug={user.username}>
                  <span className="name" title={user.name}>{user.name}</span>
                  <span className="username" title={user.username}>({user.username})</span>
                </PageLink>
                {!readOnly && <>
                  <EditableList
                    className="role"
                    defaultValue={user.level}
                    onChange={level => this.handleSetPermission(user, level)}
                    options={['owner', 'editor', 'player']}
                  />
                  <RemoveIcon
                    className="remove icon"
                    onClick={() => this.handleToggleRemoved(user)}
                  />
                </>}
              </li>
            ))}
          </ul>
        </Scrollbars>
        {!readOnly && <>
          <UserSearchBox
            className="add-user"
            onSelect={this.handleAddUser}
          />
          {(this.state.edits.length !== 0) && (
            <button className="save safe" onClick={this.handleSave}>Save</button>
          )}
        </>}
      </div>
    )
  }
}
