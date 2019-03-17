import Link from 'next/link'
import React, { Component, Fragment } from 'react'
import CreateMenu from '@/components/CreateMenu'
import FlyoutMenu, { MenuItem } from '@/components/FlyoutMenu'
import Application from '@/contexts/Application'
import LogOutIcon from '@/icons/logout.svg'
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
  renderLoggedIn = () => {
    const MenuType = this.context.campaign ? CreateMenu : FlyoutMenu
    return (
      <Fragment>
        <Link href={`/user/${this.context.user.username}`}>
          <div className="username">
            <span>logged in as</span>
            <a href="#">{this.context.user.username}</a>
          </div>
        </Link>
        <div className="divider" />
        <MenuType>
          <MenuItem className="logoff" onClick={this.context.logOff}>
            <LogOutIcon /> Log Out
          </MenuItem>
        </MenuType>
      </Fragment>
    )
  }

  render = () => (
    <div className="user-menu">
      {this.context.user.anonymous
        ? this.renderAnonymous()
        : this.renderLoggedIn()
      }
    </div>
  )
}
