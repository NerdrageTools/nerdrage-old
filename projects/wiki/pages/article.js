import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'
import JsxParser from 'react-jsx-parser'
import URI from '@/utilities/URI'

export default class Article extends Component {
  static getInitialProps = async ({ query, req }) => (
    fetch(URI(req, `/api/wiki/${query.slug}`)).then(r => r.json())
  )

  render() {
    const { html, title } = this.props
    return (
      <div className="article page">
        <h1>{title}</h1>
        <JsxParser jsx={html} />
      </div>
    )
  }
}
