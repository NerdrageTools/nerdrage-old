import React, { Component } from 'react'
import { Application } from '~/contexts/Application'
import './authPages.scss'

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
const USERNAME_REGEX = /[a-zA-Z0-9_-]{4,}/

export default class SignupPage extends Component {
	static contextType = Application

	state = {
		valid: false,
	}

	email = React.createRef()
	name = React.createRef()
	password = React.createRef()
	passwordConfirm = React.createRef()
	username = React.createRef()

	componentDidMount = () => {
		this.name.current.focus()
	}

	handleEmail = ({ target }) => {
		// eslint-disable-next-line no-param-reassign
		target.value = target.value.toLowerCase()

		if (target.value.match(EMAIL_REGEX)) {
			target.classList.remove('invalid')
		} else {
			target.classList.add('invalid')
		}

		this.handleValidated()
	}
	handlePassword = ({ target }) => {
		const { value } = target
		if (value.match(PASSWORD_REGEX)) {
			target.classList.remove('invalid')
		} else {
			target.classList.add('invalid')
		}

		this.handleValidated()
	}
	handlePasswordConfirm = ({ target }) => {
		if (target.value === this.password.current.value) {
			target.classList.remove('invalid')
		} else {
			target.classList.add('invalid')
		}

		this.handleValidated()
	}
	handleUsername = ({ target }) => {
		// eslint-disable-next-line no-param-reassign
		target.value = target.value
			.toLowerCase()
			.replace(/[^a-z0-9-_]+/g, '')

		if (target.value.match(USERNAME_REGEX)) {
			target.classList.remove('invalid')
		} else {
			target.classList.add('invalid')
		}

		this.handleValidated()
	}
	handleValidated = () => {
		let valid = true;

		['email', 'password', 'passwordConfirm', 'username'].forEach(key => {
			const el = this[key].current
			if (!el.value || el.matches(':invalid, .invalid')) {
				valid = false
			}
		})

		this.setState({ valid })
	}

	handleKeyPress = event => {
		switch (event.key) {
		case 'Enter':
			this.handleSubmit(); break
		case 'Escape':
			this.context.router.back(); break
		default:
		}
	}
	handleSubmit = async () => {
		if (!this.state.valid) { return }

		const email = this.email.current.value
		const name = this.name.current.value
		const password = this.password.current.value
		const username = this.username.current.value

		const response = await fetch('/api/user', {
			body: JSON.stringify({ email, name, password, username }),
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

	/* eslint-disable no-useless-escape */
	render = () => (
		<div className="signup page">
			<div className="container">
				<h3>Sign Up</h3>
				<input
					onChange={this.handleValidated}
					onKeyDown={this.handleKeyPress}
					placeholder="Name (optional)"
					ref={this.name}
					type="text"
				/>

				<input
					onChange={this.handleUsername}
					onKeyDown={this.handleKeyPress}
					pattern="[a-zA-Z0-9_-]{4,}"
					placeholder="Username"
					ref={this.username}
					type="text"
				/>
				<span className="validation-message">
	Length: 4+, letters, numbers, _ & -
				</span>

				<input
					onChange={this.handleEmail}
					onKeyDown={this.handleKeyPress}
					placeholder="Email Address"
					ref={this.email}
					type="email"
				/>
				<span className="validation-message">
	Must be a valid e-mail address
				</span>

				<input
					onChange={this.handlePassword}
					onKeyDown={this.handleKeyPress}
					placeholder="Password"
					ref={this.password}
					type="password"
				/>
				<span className="validation-message">
	At least 8 characters; must include one a-z, one A-Z, one 0-9 and 1 special character
				</span>
				<input
					onChange={this.handlePasswordConfirm}
					onKeyDown={this.handleKeyPress}
					placeholder="Confirm Password"
					ref={this.passwordConfirm}
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

				<center className="message-field">{this.state.message}</center>
			</div>
		</div>
	)
	/* eslint-enable no-useless-escape */
}
