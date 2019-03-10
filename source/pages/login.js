import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import React, { Component } from 'react'
import Application from '@/contexts/Application'
import './login.scss'

export default class LoginPage extends Component {
  static contextType = Application

  username = React.createRef()
  password = React.createRef()

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSubmit()
    }
  }

  handleSubmit = async () => {
    const username = this.username.current.value
    const password = this.password.current.value
    const response = await fetch('/api/user/login', {
      body: JSON.stringify({ password, username }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
    const json = await response.json()
    if (response.status === 200) {
      const { redirectTo } = this.context.router.query
      this.context.setUser(json)
      if (redirectTo) Router.push(redirectTo)
    } else {
      this.setState(json)
    }
  }

  renderLoggedIn = () => <>
    <p>You are currently logged in as user <b>{this.context.user.username}</b>.</p>
    <div className="buttons">
      <button className="login" onClick={this.context.logOff}>Log Off</button>
    </div>
  </>

  renderLogIn = () => <>
    <h3>Log In</h3>
    <input
      type="text"
      placeholder="Username"
      ref={this.username}
      onKeyPress={this.handleKeyPress}
    />
    <input
      type="password"
      placeholder="Password"
      ref={this.password}
      onKeyPress={this.handleKeyPress}
    />
    <div className="buttons">
      <button className="login" onClick={this.handleSubmit}>Submit</button>
    </div>
  </>

  render = () => {
    const { anonymous } = this.context.user

    return (
      <div className="login page">
        <div className="container">
          {anonymous ? this.renderLogIn() : this.renderLoggedIn()}
        </div>
      </div>
    )
  }
}
