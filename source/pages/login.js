import fetch from 'isomorphic-unfetch'
import Router from 'next/router'
import React, { Component } from 'react'
import Application from '@/contexts/Application'
import './authPages.scss'

export default class LoginPage extends Component {
  static contextType = Application

  username = React.createRef()
  password = React.createRef()

  state = {
    message: '',
  }

  componentDidMount = () => {
    if (this.context.user.anonymous) {
      this.username.current.focus()
    } else {
      this.handleRedirect()
    }
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleSubmit()
    }
  }
  handleUsername = ({ target }) => {
    // eslint-disable-next-line no-param-reassign
    target.value = target.value.toLowerCase()
  }

  handleRedirect = () => {
    const { redirectTo } = this.context.router.query
    if (redirectTo) Router.push(redirectTo)
  }
  handleSubmit = async () => {
    const username = this.username.current.value
    const password = this.password.current.value
    const response = await fetch('/api/user/auth/login', {
      body: JSON.stringify({ password, username }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
    const json = await response.json()
    if (response.status === 200) {
      this.context.setUser(json)
      this.context.updateCampaign({})
      this.handleRedirect()
    } else {
      this.setState({ message: '', ...json })
    }
  }

  renderLoggedIn = () => <>
    <p>You are currently logged in as user <b>{this.context.user.username}</b>.</p>
    <div className="buttons">
      <button className="link" onClick={this.context.logOff}>Log Off</button>
    </div>
  </>

  renderLogIn = () => <>
    <h3>Log In</h3>
    <input
      type="text"
      placeholder="Username or Email"
      ref={this.username}
      onChange={this.handleUsername}
      onKeyPress={this.handleKeyPress}
    />
    <input
      type="password"
      placeholder="Password"
      ref={this.password}
      onKeyPress={this.handleKeyPress}
    />
    <div className="buttons">
      <button className="safe" onClick={this.handleSubmit}>Submit</button>
    </div>

    <center className="message-field">{this.state.message}</center>
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
