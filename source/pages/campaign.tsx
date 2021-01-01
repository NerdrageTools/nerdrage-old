import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Editable } from '~/components/Editable/Editable'
import { Link } from '~/components/Link/Link'
import { Participants } from '~/components/Participants/Participants'
import { SheetList } from '~/components/SheetList/SheetList'
import { Sources } from '~/components/Sources/Sources'
import { ThemeEditor } from '~/components/ThemeEditor/ThemeEditor'
import { Toggle } from '~/components/Toggle/Toggle'
import { Application } from '~/contexts/Application'
import PublicIcon from '~/icons/public.svg'
import SecretIcon from '~/icons/secret.svg'
import ErrorPage from '~/pages/_error'
import { pluck } from '~/utilities/pluck'

const EDITABLE_FIELDS = ['title']
const STATE_FIELDS = [...EDITABLE_FIELDS, 'isEditor', 'isOwner', 'isPlayer']

export default class CampaignPage extends Component {
	static styles = import('./campaign.scss')
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
			editors: editors.map(user => user.id),
			owners: owners.map(user => user.id),
			players: players.map(user => user.id),
		}
		this.context.updateCampaign(update, () => {
			this.setState({ savingParticipants: false })
		})
	}
	handleReset = () => this.setState(pluck(this.context.campaign, STATE_FIELDS))
	handleSave = () => this.context.updateCampaign(this.state)
	handleSourcesChange = sources => {
		this.context.updateCampaign({ sources: sources.map(s => s.id) })
	}
	handleTitleChange = title => this.setState({ title })
	handleToggleSecret = () => {
		const { secret } = this.context.campaign
		this.context.updateCampaign({ secret: !secret })
	}
	renderUserList = list => (
		<ul className="user-list">
			{list.map(({ id, name, username }) => (
				<li key={id}>
					<Link slug={username} type="user">{name || username}</Link>
				</li>
			))}
		</ul>
	)
	render = () => {
		const { campaign } = this.context
		if (!campaign.id) {
			return <ErrorPage message={campaign.message} statusCode={404} />
		}

		const {
			editors, isEditor, isOwner, isParticipant,
			owners, players, secret, sources,
		} = campaign
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
					<Toggle
						className="secret"
						offIcon={PublicIcon}
						onIcon={SecretIcon}
						onToggle={this.handleToggleSecret}
						readOnly={!isOwner}
						value={secret}
					/>
					{this.isDirty && isOwner && <>
						<button className="safe" onClick={this.handleSave}>Save</button>
						<button className="safe" onClick={this.handleReset}>Reset</button>
					</>}
				</div>
				<Scrollbars autoHide className="contents scrollbars" universal>
					<div className="left column">
						<Participants
							className="lightbox"
							{...{ editors, owners, players }}
							onSave={this.handleParticipantsSave}
							readOnly={!isEditor}
							saving={savingParticipants}
						/>
						{isParticipant && <SheetList className="lightbox" />}
					</div>
					<div className="right column">
						<Sources
							className="lightbox"
							onSave={this.handleSourcesChange}
							placeholder="Add Source Campaign..."
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
