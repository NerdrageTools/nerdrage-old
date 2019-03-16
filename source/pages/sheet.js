import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'
import { CharacterModel, LayoutModel, Sheet as SfSheet } from 'sheetforge'
import Editable from '@/components/Editable'
import Application from '@/contexts/Application'
import defaultLayout from '@/data/defaultSheetLayout'
import pluck from '@/utilities/pluck'
import URI from '@/utilities/URI'
import 'sheetforge/build/sheetforge.css'
import './sheet.scss'

const UPDATABLE_FIELDS = [
  'data',
  'layout',
  'title',
]

export default class Sheet extends Component {
  static contextType = Application
  static defaultProps = {
    children: [],
    data: {},
    layout: defaultLayout,
    title: 'Unnamed Character',
  }

  state = {
    data: this.props.data,
    layout: this.props.layout,
    saved: {
      data: this.props.data,
      layout: this.props.layout,
      title: this.props.title || this.context.router.query.title,
    },
    title: this.props.title || this.context.router.query.title,
  }

  static getInitialProps = async ({ query, req }) => {
    const headers = pluck(req && req.headers, 'cookie')
    const result = await fetch(URI(req, `/api/sheet/${query.slug}`), { headers })
    if (result.status !== 200) {
      return Promise.resolve({ statusCode: result.status })
    }
    return result.json()
  }

  get isDirty() {
    const fromCurrent = JSON.stringify(pluck(this.state, UPDATABLE_FIELDS))
    const fromSaved = JSON.stringify(pluck(this.state.saved, UPDATABLE_FIELDS))

    return fromCurrent !== fromSaved
  }

  handleChange = (data, layout) => {
    this.setState({ data, layout })
  }
  handleSave = async () => {
    const { slug } = this.context.router.query
    const response = await fetch(`/api/sheet/${slug}`, {
      body: JSON.stringify(pluck(this.state, UPDATABLE_FIELDS)),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
    if (response.status === 200) {
      const sheet = await response.json()
      return this.setState({ ...sheet, saved: pluck(sheet, UPDATABLE_FIELDS) })
    }

    return this.setState(await response.json())
  }
  handleTitleChange = title => this.setState({ title })

  render = () => {
    const { data, layout, title } = this.state
    const isEditable = this.props.isEditable || !this.props._id

    return (
      <div className="sheet page">
        <div className="title-bar">
          <Editable
            className="title"
            onChange={this.handleTitleChange}
            readOnly={!isEditable}
            value={title}
          />
          {this.isDirty && (
            <button className="save safe" onClick={this.handleSave}>Save</button>
          )}
        </div>
        <div className="sheet-container">
          <SfSheet
            character={CharacterModel.create(data)}
            layout={LayoutModel.create(layout)}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}
