import React, { Component } from 'react'
import { CreateMenu } from '~/components/CreateMenu/CreateMenu'
import { Menu } from '~/components/Menu/Menu'
import { Link } from '~/components/Link/Link'
import { Application } from '~/contexts/Application'
import LogOutIcon from '~/icons/logout.svg'

export class UserMenu extends Component {
	static styles = import('./UserMenu.scss')
	static contextType = Application

	renderAnonymous = (): JSX.Element => {
		const { asPath, query } = this.context.router
		const redirectTo = query.redirectTo || asPath

		return <>
			<Link query={{ redirectTo }} to="/login">Log In</Link>
			<div className="divider" />
			<Link to="/signup">Sign Up</Link>
		</>
	}

	renderLoggedIn = (): JSX.Element => {
		const { username } = this.context.user

		return <>
			<div className="username">
				<span>logged in as</span>
				<Link slug={username} type="user">{username}</Link>
			</div>
			<div className="divider" />
			<Menu>
				{this.context.campaign && <CreateMenu />}
				<Menu.MenuItem icon={<LogOutIcon />} onClick={this.context.logOff}>
					Log Out
				</Menu.MenuItem>
			</Menu>
		</>
	}

	render = (): JSX.Element => {
		const { user } = this.context

		return (
			<div className="user-menu">
				{(!user || user.anonymous) ? this.renderAnonymous() : this.renderLoggedIn()}
			</div>
		)
	}
}
