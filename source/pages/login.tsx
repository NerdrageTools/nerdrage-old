import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'
import { Application } from '~/contexts/Application'
import { IUserProfile } from '~/server/models'

export default class LoginPage extends Component {
	static styles = import('./authPages.scss')
	static contextType = Application
	context!: React.ContextType<typeof Application>

	username = React.createRef<HTMLInputElement>()
	password = React.createRef<HTMLInputElement>()

	state = {
		message: '',
	}

	componentDidMount = (): void => {
		if (this.context.user) {
			this.username.current?.focus()
		} else {
			this.handleRedirect()
		}
	}

	handleKeyPress = (event: React.KeyboardEvent): void => {
		if (event.key === 'Enter') {
			this.handleSubmit()
		}
	}
	handleChangeUsername = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
		// eslint-disable-next-line no-param-reassign
		target.value = target.value.toLowerCase()
	}

	handleRedirect = (): void => {
		const { router } = this.context
		const { redirectTo } = router!.query
		if (redirectTo) router!.push(redirectTo as string)
	}
	handleSubmit = async (): Promise<void> => {
		const username = this.username.current!.value
		const password = this.password.current!.value
		const response = await fetch('/api/user/auth/login', {
			body: JSON.stringify({ password, username }),
			headers: { 'Content-Type': 'application/json' },
			method: 'POST',
		})
		const user = await response.json() as IUserProfile
		if (response.status === 200) {
			this.context.setUser(user)
			this.context.updateCampaign()
			this.handleRedirect()
		} else {
			this.setState({ message: '', ...user })
		}
	}

	renderLoggedIn = (): JSX.Element => <>
		<p>{'You are currently logged in as user '}<b>{this.context.user?.username}</b>.</p>
		<div className="buttons">
			<button className="link" onClick={this.context.handleLogOff}>Log Off</button>
		</div>
	</>

	renderLogIn = (): JSX.Element => <>
		<h3>Log In</h3>
		<input
			ref={this.username}
			autoComplete="username"
			onChange={this.handleChangeUsername}
			onKeyPress={this.handleKeyPress}
			placeholder="Username or Email"
			type="text"
		/>
		<input
			ref={this.password}
			autoComplete="current-password"
			onKeyPress={this.handleKeyPress}
			placeholder="Password"
			type="password"
		/>
		<div className="buttons">
			<button className="safe" onClick={this.handleSubmit}>Submit</button>
		</div>
		<div className="message-field center">{this.state.message}</div>
	</>

	render = (): JSX.Element => (
		<div className="login page">
			<div className="container">
				{this.context.user ? this.renderLoggedIn() : this.renderLogIn()}
			</div>
		</div>
	)
}
