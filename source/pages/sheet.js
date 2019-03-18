import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { CharacterModel, LayoutModel, Sheet as SfSheet } from 'sheetforge'
import Editable from '@/components/Editable'
import Application from '@/contexts/Application'
import defaultLayout from '@/data/defaultSheetLayout'
import confirm from '@/utilities/confirm'
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
    title: '',
  }

  state = {
    ...pluck(this.props, '_id', 'data', 'layout', 'isEditable', 'isOwner'),
    saved: pluck(this.props, 'data', 'layout', 'title'),
    title: this.props.title || this.context.router.query.title || 'Unnamed Character',
  }

  static getInitialProps = async ({ query, req }) => {
    const headers = pluck(req && req.headers, 'cookie')
    const response = await fetch(URI(req, `/api/sheet/${query.slug}`), { headers })
    const json = await response.json()
    return { statusCode: response.status, ...json }
  }

  get isDirty() {
    const fromCurrent = JSON.stringify(pluck(this.state, UPDATABLE_FIELDS))
    const fromSaved = JSON.stringify(pluck(this.state.saved, UPDATABLE_FIELDS))

    return fromCurrent !== fromSaved
  }

  handleChange = (data, layout) => {
    this.setState({ data, layout })
  }
  handleDelete = async () => {
    if (await confirm('Are you sure you want to permanently delete this sheet?')) {
      const { slug } = this.context.router.query
      const response = await fetch(`/api/sheet/${slug}`, { method: 'DELETE' })
      if (response.status === 204) {
        this.context.router.back()
      }
    }
  }
  handleSave = async () => {
    const { slug } = this.context.router.query
    const response = await fetch(`/api/sheet/${slug}`, {
      body: JSON.stringify(pluck(this.state, UPDATABLE_FIELDS)),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
    const json = await response.json()
    if (response.status === 200) {
      return this.setState({
        ...json,
        saved: {
          ...this.state.saved,
          ...pluck(json, UPDATABLE_FIELDS),
        },
      })
    }

    return this.setState(json)
  }
  handleTitleChange = title => this.setState({ title })

  render = () => {
    const { data, isEditable, isOwner, layout, title } = this.state

    return (
      <div className="sheet page">
        <div className="title-bar">
          <Editable
            className="title"
            onChange={this.handleTitleChange}
            readOnly={!isEditable}
            value={title}
          />
          {isEditable && this.isDirty && (
            <button className="save safe" onClick={this.handleSave}>Save</button>
          )}
          {isOwner && (
            <button className="delete danger" onClick={this.handleDelete}>Delete</button>
          )}
        </div>
        <Scrollbars className="sheet-container" autoHide universal>
          <SfSheet
            character={CharacterModel.create(data)}
            layout={LayoutModel.create(layout)}
            onChange={this.handleChange}
            readOnly={!isEditable}
          />
        </Scrollbars>
      </div>
    )
  }
}
