import React, { Component } from 'react'
import { Alert } from '~/components/Alert/Alert'
import { Editable } from '~/components/Editable/Editable'
import { IFrame } from '~/components/IFrame/IFrame'
import { Toggle } from '~/components/Toggle/Toggle'
import { Application } from '~/contexts/Application'
import { NavigationIcon } from '~/icons/Navigation'
import PublicIcon from '~/icons/public.svg'
import SecretIcon from '~/icons/secret.svg'
import { confirm } from '~/utilities/confirm'
import { pluck } from '~/utilities/pluck'
import { URI } from '~/utilities/URI'

const STATE_FIELDS = [
	'id',
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
	static styles = import('./map.scss')
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
			id: null,
			data: null,
			title: router.query.title || '',
		}

		this.context.updateUser()
		this.setState({ ...json, generating: false })
	}
	handleGenerate = () => this.setState({ generating: true })
	handleOnReady = async ({ window }) => {
		this.iframeWindow = window

		const {
			id, checksum, data, generating,
		} = this.state
		const { slug } = this.props

		if (data) {
			window.displayJsonData(data)
		} else if (id) {
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
			id, data, loading, generating, isEditable, isOwner, saving, secret, title,
		} = this.state

		let contents
		if (id || (isEditable && generating)) {
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
					queryString={{ doNotGenerate: true }}
					src="/static/fantasy-map-generator"
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
					This map either doesn't exist, or you don't have permission to view it.
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
					{id && isOwner && (
						<Toggle
							className="secret" offIcon={PublicIcon}
							onIcon={SecretIcon} onToggle={this.handleToggleSecret}
							value={secret}
						/>
					)}
					{id && campaign.isEditor && (
						<Toggle
							className="in-navigation" offIcon={NavigationIcon}
							offProps={{ title: 'Not Added to Site Navigation' }} onIcon={NavigationIcon}
							onProps={{ title: 'Added to Site Navigation' }} onToggle={this.handleToggleNavigation}
							value={this.isNavLink}
						/>
					)}
					{(data || generating) && isEditable && (
						<button className="safe" disabled={saving} onClick={this.handleSave}>Save</button>
					)}
					{id && isEditable && (
						<button className="danger" onClick={this.handleDelete}>Delete</button>
					)}
				</div>
				{contents}
			</div>
		)
	}
}
