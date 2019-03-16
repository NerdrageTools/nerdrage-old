import Link from 'next/link'
import React, { Component, Fragment } from 'react'
import CreateMenu from '@/components/CreateMenu'
import { MenuItem } from '@/components/FlyoutMenu'
import Application from '@/contexts/Application'
import './UserMenu.scss'

export default class UserMenu extends Component {
  static contextType = Application

  renderAnonymous = () => {
    const { asPath, query } = this.context.router
    const redirectTo = query.redirectTo || asPath

    return (
      <Link href={`/login?redirectTo=${redirectTo}`}>
        <a href="#" className="logon">Log In</a>
      </Link>
    )
  }
  renderLoggedIn = () => (
    <Fragment>
      <Link href={`/user/${this.context.user.username}`}>
        <div className="username">
          <span>logged in as</span>
          <a href="#">{this.context.user.username}</a>
        </div>
      </Link>
      <div className="divider" />
      <CreateMenu>
        <MenuItem className="logoff" onClick={this.context.logOff}>Log Out</MenuItem>
      </CreateMenu>
    </Fragment>
  )

  render = () => (
    <div className="user-menu">
      {this.context.user.anonymous
        ? this.renderAnonymous()
        : this.renderLoggedIn()
      }
    </div>
  )
}
