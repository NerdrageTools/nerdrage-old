import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import React, { Component } from 'react'
import ThemeContext from '@/contexts/Theme'
import URI from '@/utilities/URI'
import './Navigation.scss'

export default class Navigation extends Component {
  static contextType = ThemeContext
  static defaultProps = {
    items: [],
  }
  static getInitialProps = async ({ req }) => ({
    items: await fetch(URI(req, '/api/navigation')).then(r => r.json()),
  })

  render = () => (
    <div
      className="navigation"
      style={{
        background: this.context.background,
        borderColor: this.context.primary,
      }}
    >
      <ul>
        {this.props.items.map((item, key) => (
          <li key={key}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
