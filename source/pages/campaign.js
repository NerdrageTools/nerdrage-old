import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import Editable from '@/components/Editable'
import Link from '@/components/Link'
import Participants from '@/components/Participants'
import Sources from '@/components/Sources'
import ThemeEditor from '@/components/ThemeEditor'
import Toggle from '@/components/Toggle'
import Application from '@/contexts/Application'
import PublicIcon from '@/icons/public.svg'
import SecretIcon from '@/icons/secret.svg'
import ErrorPage from '@/pages/_error'
import pluck from '@/utilities/pluck'
import './campaign.scss'

const EDITABLE_FIELDS = ['title', 'theme']
const STATE_FIELDS = [...EDITABLE_FIELDS, 'isEditor', 'isOwner', 'isPlayer']

export default class CampaignPage extends Component {
  static contextType = Application

  state = {
    ...pluck(this.context.campaign, STATE_FIELDS),
    savingParticipants: false,
  }

  get isDirty() {
    const { campaign } = this.context

    const fromContext = JSON.stringify(pluck(campaign, EDITABLE_FIELDS))
    const fromState = JSON.stringify(pluck(this.state, EDITABLE_FIELDS))

    return fromContext !== fromState
  }

  handleParticipantsSave = ({ editors, owners, players }) => {
    this.setState({ savingParticipants: true })
    const update = {
      editors: editors.map(user => user._id),
      owners: owners.map(user => user._id),
      players: players.map(user => user._id),
    }
    this.context.updateCampaign(update, () => {
      this.setState({ savingParticipants: false })
    })
  }
  handleReset = () => this.setState(pluck(this.context.campaign, STATE_FIELDS))
  handleSave = () => this.context.updateCampaign(this.state)
  handleSourcesChange = sources => {
    this.context.updateCampaign({ sources: sources.map(s => s._id) })
  }
  handleTitleChange = title => this.setState({ title })
  handleToggleSecret = () => {
    const { secret } = this.context.campaign
    this.context.updateCampaign({ secret: !secret })
  }
  renderUserList = list => (
    <ul className="user-list">{list
      .map(({ _id, name, username }) => (
        <li key={_id}>
          <Link type="user" slug={username}>{name || username}</Link>
        </li>
      ))}
    </ul>
  )
  render = () => {
    const { campaign } = this.context
    if (!campaign._id) {
      return <ErrorPage statusCode={404} message={campaign.message} />
    }

    const { editors, isEditor, isOwner, owners, players, secret, sources } = campaign
    const { savingParticipants, title } = this.state

    return (
      <div className="campaign page">
        <div className="title-bar">
          <Editable
            className="title"
            onChange={this.handleTitleChange}
            placeholder="Campaign Title"
            readOnly={campaign.isEditable}
            value={title}
          />
          {isOwner && (
            <Toggle
              className="secret"
              offIcon={PublicIcon}
              onIcon={SecretIcon}
              onToggle={this.handleToggleSecret}
              value={secret}
            />
          )}
          {this.isDirty && <>
            <button className="safe" onClick={this.handleSave}>Save</button>
            <button className="safe" onClick={this.handleReset}>Reset</button>
          </>}
        </div>
        <Scrollbars className="contents scrollbars" universal autoHide>
          <div className="left column">
            <Participants
              className="lightbox"
              {...{ editors, owners, players }}
              onSave={this.handleParticipantsSave}
              saving={savingParticipants}
              readOnly={!isEditor}
            />
          </div>
          <div className="right column">
            <Sources
              className="lightbox"
              onSave={this.handleSourcesChange}
              readOnly={!isEditor}
              sources={sources}
            />
            <ThemeEditor className="lightbox" readOnly={!isEditor} />
          </div>
        </Scrollbars>
      </div>
    )
  }
}
