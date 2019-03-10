import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import React, { Component, Fragment } from 'react'
import Application from '@/contexts/Application'
import './UserMenu.scss'

export default class UserMenu extends Component {
  static contextType = Application

  handleLogOff = async () => {
    await fetch('/api/user/logoff')
    this.context.setUser({ anonymous: true })
  }

  renderAnonymous = () => (
    <Link href="/login">
      <a className="login-button">Log In</a>
    </Link>
  )
  renderLoggedIn = () => (
    <Fragment>
      <Link href="/profile">
        {this.context.user.username}
      </Link>
      |
      <a onClick={this.handleLogOff}>Log Off</a>
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
