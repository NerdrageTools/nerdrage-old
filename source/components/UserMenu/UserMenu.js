import Link from 'next/link'
import React, { Component, Fragment } from 'react'
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
      <Link href="/profile">
        <div className="username">
          <span>logged in as</span>
          <a href="#">{this.context.user.username}</a>
        </div>
      </Link>
      <div className="divider" />
      <a href="#" className="logoff" onClick={this.context.logOff}>log<br/>out</a>
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
