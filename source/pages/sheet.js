import fetch from 'isomorphic-unfetch'
import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { CharacterModel, LayoutModel, Sheet as SfSheet } from 'sheetforge'
import Editable from '@/components/Editable'
import Toggle from '@/components/Toggle'
import Application from '@/contexts/Application'
import defaultLayout from '@/data/defaultSheetLayout'
import PublicIcon from '@/icons/public.svg'
import SecretIcon from '@/icons/secret.svg'
import confirm from '@/utilities/confirm'
import pluck from '@/utilities/pluck'
import URI from '@/utilities/URI'
import 'sheetforge/build/sheetforge.css'
import './sheet.scss'

const STATE_FIELDS = ['_id', 'isEditor', 'isOwner', 'secret', 'slug']
const UPDATABLE_FIELDS = ['title']

export default class Sheet extends Component {
  static contextType = Application
  static defaultProps = {
    children: [],
    data: {},
    layout: defaultLayout,
    slug: '',
    title: '',
  }

  state = {
    ...pluck(this.props, STATE_FIELDS),
    saved: pluck(this.props, UPDATABLE_FIELDS),
    title: this.props.title || this.context.router.query.title || 'Unnamed Character',
  }

  character = CharacterModel.create({})
  layout = LayoutModel.create(defaultLayout)

  static getInitialProps = async ({ query, req }) => {
    const headers = pluck(req && req.headers, 'cookie')
    const response = await fetch(URI(req, `/api/sheet/${query.slug}`), { headers })
    const json = await response.json()
    return { statusCode: response.status, ...json }
  }

  get isDirty() {
    return (
      this.state.title !== this.state.saved.title
      || this.character.isDirty || this.layout.isDirty
    )
  }

  componentDidMount = () => {
    this.updateSheet(this.props)
  }
  componentWillReceiveProps = props => {
    if (props.slug !== this.props.slug) {
      this.character = CharacterModel.create(props.data)
      this.layout = LayoutModel.create(props.layout)
      this.setState({
        saved: pluck(props, UPDATABLE_FIELDS),
        title: props.title || new URLSearchParams(window.location.search).get('title') || '',
      })
    }
  }
  updateSheet = ({ data = {}, layout = defaultLayout }) => {
    this.character.set(data)
    this.character.markAsClean()
    this.layout.set(layout)
    this.layout.markAsClean()
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
  handleReset = () => {
    this.character.reset()
    this.layout.reset()
    this.setState(this.state.saved)
  }
  handleSave = async payload => {
    const { slug } = this.context.router.query
    const response = await fetch(`/api/sheet/${slug}`, {
      body: JSON.stringify(payload || {
        data: this.character.toJSON(),
        layout: this.layout.toJSON(),
        title: this.state.title,
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
    const json = await response.json()
    if (response.status === 200) {
      this.updateSheet(json)
      return this.setState({
        ...pluck(json, STATE_FIELDS),
        saved: pluck(json, UPDATABLE_FIELDS),
      })
    }

    return this.setState(json)
  }
  handleSheetChange = () => this.forceUpdate()
  handleTitleChange = title => this.setState({ title })
  handleToggleSecret = () => this.handleSave({ secret: !this.state.secret })

  render = () => {
    const { slug } = this.props
    const { _id, isEditor, isOwner, secret, title } = this.state

    return (
      <div className="sheet page">
        <div className="title-bar">
          <Editable
            className="title"
            onChange={this.handleTitleChange}
            readOnly={!isEditor}
            value={title}
          />
          {isEditor && this.isDirty && <>
            <button className="safe" onClick={() => this.handleSave()}>{_id ? 'Save' : 'Create'}</button>
            {_id && <button className="safe" onClick={this.handleReset}>Reset</button>}
          </>}
          {_id && isEditor && (
            <Toggle
              className="secret"
              offIcon={PublicIcon}
              onIcon={SecretIcon}
              onToggle={this.handleToggleSecret}
              value={secret}
            />
          )}
          {_id && isOwner && (
            <button className="delete danger" onClick={this.handleDelete}>Delete</button>
          )}
        </div>
        <Scrollbars
          autoHide universal
          className={`sheet-container ${isEditor ? 'is-editable' : 'readOnly'}`}
        >
          <SfSheet
            key={slug} readOnly={!isEditor}
            character={this.character} layout={this.layout}
            onChange={this.handleSheetChange}
          />
        </Scrollbars>
      </div>
    )
  }
}
