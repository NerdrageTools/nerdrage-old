import dayjs from 'dayjs'
import dayjsRelativeTime from 'dayjs/plugin/relativeTime'
import deepEqual from 'fast-deep-equal'
import { NextPageContext } from 'next'
import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Editable } from '~/components/Editable/Editable'
import { Links } from '~/components/Links/Links'
import { Toggle } from '~/components/Toggle/Toggle'
import { Application } from '~/contexts/Application'
import AdminIcon from '~/icons/Administrator'
import DiceIcon from '~/icons/dice.svg'
import FavoriteIcon from '~/icons/favorite-on.svg'
import SheetIcon from '~/icons/sheet.svg'
import Error from '~/pages/_error'
import { IUserProfile } from '~/server/models/User'
import { confirm } from '~/utilities/confirm'
import { pluck } from '~/utilities/pluck'
import { URI } from '~/utilities/URI'

dayjs.extend(dayjsRelativeTime)

const UPDATABLE_FIELDS = ['email', 'favorites', 'isAdmin', 'name', 'username']

interface Props {
	httpStatusCode?: number,
	message?: string,
	user: IUserProfile,
}
interface State {
	saved: IUserProfile,
	user: IUserProfile,
}

export default class UserPage extends Component<Props> {
	static styles = import('./user.scss')
	static contextType = Application
	static defaultProps = {
		httpStatusCode: 200,
		message: '',
		user: null,
	}
	static getInitialProps = async ({ query, req }: NextPageContext): Promise<Props> => {
		const headers = pluck(req?.headers, 'cookie')
		const result = await (fetch(URI(req, `/api/user/${query.slug}`), { headers }))

		return {
			httpStatusCode: result.status !== 200 ? result.status : undefined,
			user: await result.json(),
		}
	}
	static getDerivedStateFromProps(props: Props, state: State): State {
		if (props.user.username !== state.user.username) {
			return {
				...state,
				saved: pluck(props.user, ...UPDATABLE_FIELDS),
				user: pluck(props.user, ...UPDATABLE_FIELDS),
			}
		}
		return state
	}

	state = {
		saved: pluck(this.props.user, ...UPDATABLE_FIELDS),
		user: pluck(this.props.user, ...UPDATABLE_FIELDS),
	}

	get isDirty(): boolean { return !deepEqual(this.state.user, this.state.saved) }

	handleNameChange = (name?: string): void => {
		this.setState({ user: { ...this.state.user, name } })
	}
	handleSave = async (): Promise<void> => {
		const response = await fetch(`/api/user/${this.state.user.username || ''}`, {
			body: JSON.stringify(this.state.user),
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
		})

		if (response.status === 200) {
			const saved = pluck(await response.json(), ...UPDATABLE_FIELDS)
			return this.setState({ saved, user: { ...this.state.user, ...saved } })
		}

		return undefined
	}
	handleToggleAdmin = async (): Promise<void> => {
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

	render = (): JSX.Element => {
		const { httpStatusCode, message } = this.props
		const { user: currentUser } = this.context
		const user = { ...this.props.user, ...this.state.user }
		const isEditable = currentUser && (user.id === currentUser.id || currentUser.isAdmin)

		if (httpStatusCode !== 200) {
			return <Error message={message} statusCode={httpStatusCode} />
		}

		return (
			<div className="user page">
				<div className="title-bar">
					<Editable
						className="title"
						onChange={this.handleNameChange}
						placeholder="Name"
						readOnly={!isEditable}
						value={user.name}
					/>
					{isEditable && this.isDirty && (
						<button className="update safe" onClick={this.handleSave}>Save</button>
					)}
					{currentUser?.isAdmin
						? (
							<Toggle
								className="is-admin"
								offIcon={AdminIcon} offProps={{ title: 'Not an Administrator' }}
								onClick={this.handleToggleAdmin}
								onIcon={AdminIcon} onProps={{ title: 'Administrator' }}
								value={user.isAdmin}
							/>
						)
						: user.isAdmin && <AdminIcon className="is-admin toggle on" />}
				</div>
				<Scrollbars autoHide className="contents scrollbars" universal>
					<div className="user-info">
						<div className="row">
							<b>Username:</b>
							{' '}
							<span>{user.username}</span>
						</div>
						{user.email && (
							<div className="row">
								<b>Email Address:</b>
								{' '}
								<span>{user.email}</span>
							</div>
						)}
						<div className="row">
							<b>Joined:</b>
							<span title={dayjs(user.createdAt).toLocaleString()}>
								{dayjs(user.createdAt).fromNow()}
							</span>
						</div>
						<div className="row">
							<b>Last Login:</b>
							<span title={dayjs(user.lastLogin).toLocaleString()}>
								{dayjs(user.lastLogin).fromNow()}
							</span>
						</div>
					</div>

					{user.favorites && (
						<Links
							caption="Favorites" icon={<FavoriteIcon className="favorites icon" />}
							pages={user.favorites}
						/>
					)}

					{user.campaigns && (
						<Links caption="Campaigns" icon={<DiceIcon />} pages={user.campaigns} type="campaign" />
					)}

					{user.sheets && (
						<Links caption="Sheets" icon={<SheetIcon />} pages={user.sheets} type="sheet" />
					)}
				</Scrollbars>
			</div>
		)
	}
}
