import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { EditableList } from '~/components/EditableList/EditableList'
import { Link } from '~/components/Link/Link'
import { UserSearchBox } from '~/components/SearchBox/UserSearchBox/UserSearchBox'
import NerdIcon from '~/icons/nerd.svg'
import RemoveIcon from '~/icons/remove.svg'
import { IUserLink } from '~/server/schema/IUser'
import { compareBy } from '~/utilities/compareBy'
import { noop } from '~/utilities/noop'
import { pluck } from '~/utilities/pluck'
import './Participants.scss'

/* eslint-disable @typescript-eslint/naming-convention */
enum SortOrder {
	editor = 2,
	owner = 1,
	player = 3,
	removed = 4,
}
/* eslint-enable @typescript-eslint/naming-convention */

type ParticipationLevel = 'owner' | 'editor' | 'player'

interface Participation {
	level: ParticipationLevel,
	order: SortOrder,
}

type Participant = IUserLink & Participation
type ParticipantEdit = Participant & {
	type: 'added' | 'removed' | 'updated',
}

interface Props {
	className: string,
	editors: IUserLink[],
	onSave: (data: { editors: IUserLink[], owners: IUserLink[], players: IUserLink[] }) => void,
	owners: IUserLink[],
	players: IUserLink[],
	readOnly: boolean,
	saving: boolean,
	title: string,
}

interface State {
	current: Participant[],
	edits: ParticipantEdit[],
	participants: ParticipantEdit[],
}

const addParticipants = (
	map: Map<string, Participant>,
	users: Partial<IUserLink>[],
	addition: Partial<Participation> = {},
): void => {
	users.forEach(user => {
		map.set(user.id!, {
			...(map.get(user.id!) || user),
			...user,
			...addition,
		} as Participant)
	})
}

export class Participants extends Component<Props, State> {
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

	static getDerivedStateFromProps(props: Props, state: State): State {
		const { editors, owners, players } = props
		const { edits } = state

		const map = new Map<string, ParticipantEdit>()
		addParticipants(map, players, { level: 'player', order: SortOrder.player })
		addParticipants(map, editors, { level: 'editor', order: SortOrder.editor })
		addParticipants(map, owners, { level: 'owner', order: SortOrder.owner })

		const current = Array.from(map.values()).sort(compareBy('order'))

		addParticipants(map, edits)
		const participants = Array.from(map.values()).sort(compareBy('order'))

		return { ...state, current, participants }
	}

	state: State = {
		current: [],
		edits: [],
		participants: [],
	}

	handleSetEdit = (user: IUserLink, edit: Partial<ParticipantEdit> = {}): void => {
		if (!user) return
		const { current, edits } = this.state
		const exists = current.find(p => p.id === user.id)
		const currentEdit = edits.find(e => e.id === user.id) || {} as ParticipantEdit

		const updated = edits.filter(e => e.id !== user.id)
		if (edit.type === 'added' && !exists) {
			updated.push({ ...user, ...edit, ...pluck(currentEdit, 'level', 'order') })
		}
		if (edit.type === 'removed' && exists && currentEdit.type !== 'removed') {
			updated.push({ ...user, ...edit, ...pluck(currentEdit, 'level', 'order') })
		}
		if (edit.type === 'updated') {
			updated.push({ ...user, ...edit } as ParticipantEdit)
		}

		this.setState({ edits: updated })
	}

	handleAddUser = (user: IUserLink): void => {
		if (!user) return
		this.handleSetEdit(user, { level: 'player', order: SortOrder.player, type: 'added' })
	}
	handleSetPermission = (user: IUserLink, level: ParticipationLevel): void => {
		if (!user) return
		this.handleSetEdit(user, { level, order: SortOrder[level], type: 'updated' })
	}
	handleToggleRemoved = (user: IUserLink): void => {
		if (!user) return
		this.handleSetEdit(user, { level: undefined, order: SortOrder.removed, type: 'removed' })
	}
	handleSave = (): void => {
		const { participants } = this.state
		this.props.onSave({
			editors: participants.filter(p => p.level === 'editor'),
			owners: participants.filter(p => p.level === 'owner'),
			players: participants.filter(p => p.level === 'player'),
		})
		this.setState({ edits: [] })
	}

	render = (): JSX.Element => {
		const { className, readOnly, saving, title } = this.props
		const { participants } = this.state

		return (
			<div className={`participants ${className} ${saving ? 'loading' : ''}`}>
				<div className="title">{title}</div>
				<Scrollbars className="contents scrollbars" universal>
					<ul className="participant-list">
						{participants.map(user => (
							<li key={user.id} className={`participant row ${user.type || ''}`}>
								<NerdIcon className="nerd icon" />
								<Link className="display" slug={user.username} type="user">
									<span className="name" title={user.name}>{user.name}</span>
									<span className="username" title={user.username}>({user.username})</span>
								</Link>
								{!readOnly && <>
									<EditableList
										className="role"
										defaultValue={user.level}
										onChange={level => this.handleSetPermission(user, level as ParticipationLevel)}
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
					<UserSearchBox onSelect={this.handleAddUser} />
					{(this.state.edits.length !== 0) && (
						<button className="save safe" onClick={this.handleSave}>Save</button>
					)}
				</>}
			</div>
		)
	}
}
