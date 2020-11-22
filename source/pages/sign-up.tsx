import React, { Component } from 'react'
import { Application } from '~/contexts/Application'
import { REGEX } from '~/utilities/CONSTANTS'

interface State {
	message: string,
	valid: boolean,
}

export default class SignupPage extends Component<never, State> {
	static styles = import('./authPages.scss')
	static contextType = Application

	state = {
		message: '',
		valid: false,
	}

	email = React.createRef<HTMLInputElement>()
	name = React.createRef<HTMLInputElement>()
	password = React.createRef<HTMLInputElement>()
	passwordConfirm = React.createRef<HTMLInputElement>()
	username = React.createRef<HTMLInputElement>()

	componentDidMount = (): void => { this.name.current?.focus() }

	handleChangeEmail = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
		// eslint-disable-next-line no-param-reassign
		target.value = target.value.toLowerCase()

		if (target.value.match(REGEX.EMAIL_ADDRESS)) {
			target.classList.remove('invalid')
		} else {
			target.classList.add('invalid')
		}

		this.handleValidated()
	}
	handleChangePassword = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = target
		if (value.match(REGEX.PASSWORD)) {
			target.classList.remove('invalid')
		} else {
			target.classList.add('invalid')
		}

		this.handleValidated()
	}
	handleChangePasswordConfirm = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
		if (target.value === this.password.current!.value) {
			target.classList.remove('invalid')
		} else {
			target.classList.add('invalid')
		}

		this.handleValidated()
	}
	handleChangeUsername = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
		// eslint-disable-next-line no-param-reassign
		target.value = target.value
			.toLowerCase()
			.replace(/[^a-z0-9-_]+/g, '')

		if (target.value.match(REGEX.USERNAME)) {
			target.classList.remove('invalid')
		} else {
			target.classList.add('invalid')
		}

		this.handleValidated()
	}
	handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
		switch (event.key) {
			case 'Enter':
				this.handleSubmit(); break
			case 'Escape':
				this.context.router.back(); break
			default:
		}
	}
	handleSubmit = async (): Promise<void> => {
		if (!this.state.valid) { return }

		const email = this.email.current?.value
		const name = this.name.current?.value
		const password = this.password.current?.value
		const username = this.username.current?.value

		const response = await fetch('/api/user', {
			body: JSON.stringify({
				email, name, password, username,
			}),
			headers: { 'Content-Type': 'application/json' },
			method: 'PUT',
		})
		const json = await response.json()

		if (response.status === 200) {
			this.context.router.push(`/user?username=${username}`, `/user/${username}`)
		} else {
			this.setState({ message: '', ...json })
		}
	}
	handleValidated = (): void => {
		let valid = true;

		[this.email, this.password, this.passwordConfirm, this.username].forEach(ref => {
			if (!ref.current!.value || ref.current!.matches(':invalid, .invalid')) {
				valid = false
			}
		})

		this.setState({ valid })
	}

	/* eslint-disable no-useless-escape */
	render = (): JSX.Element => (
		<div className="sign-up page">
			<div className="container">
				<h3>Sign Up</h3>
				<input
					ref={this.name}
					onChange={this.handleValidated}
					onKeyDown={this.handleKeyPress}
					placeholder="Name (optional)"
					type="text"
				/>

				<input
					ref={this.username}
					onChange={this.handleChangeUsername}
					onKeyDown={this.handleKeyPress}
					pattern="[a-zA-Z0-9_-]{4,}"
					placeholder="Username"
					type="text"
				/>
				<span className="validation-message">
					Length: 4+, letters, numbers, _ & -
				</span>

				<input
					ref={this.email}
					onChange={this.handleChangeEmail}
					onKeyDown={this.handleKeyPress}
					placeholder="Email Address"
					type="email"
				/>
				<span className="validation-message">
					Must be a valid e-mail address
				</span>

				<input
					ref={this.password}
					onChange={this.handleChangePassword}
					onKeyDown={this.handleKeyPress}
					placeholder="Password"
					type="password"
				/>
				<span className="validation-message">
					At least 8 characters; must include one a-z, one A-Z, one 0-9 and 1 special character
				</span>
				<input
					ref={this.passwordConfirm}
					onChange={this.handleChangePasswordConfirm}
					onKeyDown={this.handleKeyPress}
					placeholder="Confirm Password"
					type="password"
				/>
				<span className="validation-message">
					Must match password field
				</span>

				<div className="buttons">
					{this.state.valid && (
						<button className="safe" onClick={this.handleSubmit}>
							Submit
						</button>
					)}
				</div>

				<div className="center message-field">{this.state.message}</div>
			</div>
		</div>
	)
	/* eslint-enable no-useless-escape */
}
