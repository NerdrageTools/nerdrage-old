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
      <Link href={`/login?redirectTo=${redirectTo}`}><a>Log In</a></Link>
    )
  }
  renderLoggedIn = () => (
    <Fragment>
      <Link href="/profile">
        <a>{this.context.user.username}</a>
      </Link>
      |
      <a href="#" onClick={this.context.logOff}>Log Off</a>
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
