import React, { Component } from 'react'
import Editable from '@/components/Editable'
import PageLink from '@/components/PageLink'
import Toggle from '@/components/Toggle'
import Application from '@/contexts/Application'
import PublicIcon from '@/icons/public.svg'
import SecretIcon from '@/icons/secret.svg'
import ErrorPage from '@/pages/_error'
// import Article from '@/server/models/Article'
import pluck from '@/utilities/pluck'
import './campaign.scss'

const EDITOR_EDITABLE_FIELDS = ['title', 'theme']
const OWNER_EDITABLE_FIELDS = [...EDITOR_EDITABLE_FIELDS, 'editors', 'owners', 'players']
const STATE_FIELDS = [...OWNER_EDITABLE_FIELDS, 'isEditor', 'isOwner', 'isPlayer']

export default class CampaignPage extends Component {
  static contextType = Application

  state = {
    ...pluck(this.context.campaign, STATE_FIELDS),
  }

  static getInitialProps = async ({ query, req }) => {
    // console.log(req.campaign)
    // const articles = Article.find({  })
    return {}
  }

  get isDirty() {
    const { campaign } = this.context
    const { isOwner, isEditor } = campaign
    let COMPARE_FIELDS = []
    if (isEditor) COMPARE_FIELDS = EDITOR_EDITABLE_FIELDS
    if (isOwner) COMPARE_FIELDS = OWNER_EDITABLE_FIELDS

    const fromContext = JSON.stringify(pluck(campaign, COMPARE_FIELDS))
    const fromState = JSON.stringify(pluck(this.state, COMPARE_FIELDS))

    return fromContext !== fromState
  }

  handleReset = () => this.setState(pluck(this.context.campaign, STATE_FIELDS))
  handleSave = () => this.context.updateCampaign(this.state)
  handleTitleChange = title => this.setState({ title })
  handleToggleSecret = () => {
    const { secret } = this.context.campaign
    this.context.updateCampaign({ secret: !secret })
  }
  renderUserList = list => (
    <ul className="user-list">{list
      .map(({ _id, name, username }) => (
        <li key={_id}>
          <PageLink type="user" slug={username}>
            {name || username}
          </PageLink>
        </li>
      ))}
    </ul>
  )
  render = () => {
    const { campaign } = this.context
    if (!campaign._id) {
      return <ErrorPage statusCode={404} message={campaign.message} />
    }

    const { isOwner, secret } = campaign
    const { editors, owners, players, title } = this.state

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
        <div className="contents">
          <div className="left column" />
          <div className="right column">
            <div className="participants lightbox">
              <b>Organizers</b>
              {this.renderUserList(owners)}
              <b>Editors</b>
              {this.renderUserList(editors)}
              <b>Players</b>
              {this.renderUserList(players)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
