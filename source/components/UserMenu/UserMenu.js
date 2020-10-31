import React, { Component, Fragment } from 'react'
import { CreateMenu } from '@/components/CreateMenu'
import { FlyoutMenu, MenuItem } from '@/components/FlyoutMenu'
import { Link } from '@/components/Link'
import { Application } from '@/contexts/Application'
import LogOutIcon from '@/icons/logout.svg'
import './UserMenu.scss'

export class UserMenu extends Component {
  static contextType = Application

  renderAnonymous = () => {
  	const { asPath, query } = this.context.router
  	const redirectTo = query.redirectTo || asPath

  	return <>
	<Link query={{ redirectTo }} type="login">Log In</Link>
	<div className="divider" />
	<Link type="signup">Sign Up</Link>
  	</>
  }
  renderLoggedIn = () => {
  	const { username } = this.context.user
  	const MenuType = this.context.campaign ? CreateMenu : FlyoutMenu

  	return (
	<Fragment>
	<div className="username">
	<span>logged in as</span>
	<Link slug={username} type="user">{username}</Link>
  			</div>
	<div className="divider" />
	<MenuType>
	<MenuItem className="logoff" onClick={this.context.logOff}>
	<LogOutIcon />
	{' '}
	Log Out
  				</MenuItem>
  			</MenuType>
  		</Fragment>
  	)
  }

  render = () => {
  	const { user } = this.context

  	return (
	<div className="user-menu">
	{(!user || user.anonymous) ? this.renderAnonymous() : this.renderLoggedIn()}
  		</div>
  	)
  }
}
