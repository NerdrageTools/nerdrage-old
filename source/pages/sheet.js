import fetch from 'isomorphic-unfetch'
import dynamic from 'next/dynamic'
import Error from 'next/error'
import React, { Component } from 'react'
import URI from '@/utilities/URI'
import './sheet.scss'

let Sheetforge = { Sheet: () => <div /> }

if (process.browser && window) {
  dynamic(() => import('sheetforge').then(sheetforge => {
    Sheetforge = sheetforge
  }))
}

export default class Sheet extends Component {
  static defaultProps = {
    children: [],
    data: {},
    layout: {},
  }

  state = {
    data: undefined,
    layout: undefined,
  }

  static getInitialProps = async ({ query, req }) => {
    const result = await fetch(URI(req, `/api/sheet/${query.slug}`))
    if (result.status !== 200) {
      return Promise.resolve({ statusCode: result.status })
    }
    return result.json()
  }

  render = () => {
    const { statusCode } = this.props
    const data = this.state.data || this.props.data
    const layout = this.state.layout || this.props.layout

    return (
      <div className="sheet page">
        {statusCode === 200
          ? <Sheetforge.Sheet character={data} layout={layout} />
          : <Error statusCode={statusCode} />
        }
      </div>
    )
  }
}
