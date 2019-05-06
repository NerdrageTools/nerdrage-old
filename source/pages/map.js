import React, { Component } from 'react'
import Alert from '@/components/Alert'
import IFrame from '@/components/IFrame'
import Application from '@/contexts/Application'
import debounce from '@/utilities/debounce'
import pluck from '@/utilities/pluck'
import URI from '@/utilities/URI'
import './map.scss'

const USER_INTERACTION_EVENTS = ['mousedown', 'mouseup', 'keydown', 'keyup']
export default class Map extends Component {
  static contextType = Application
  static defaultProps = {
    data: null,
    readOnly: false,
  }
  static getInitialProps = async ({ query, req }) => {
    const headers = pluck(req && req.headers, 'cookie')
    const result = await fetch(URI(req, `/api/map/${query.slug}`), { headers })
    const json = await result.json()

    return {
      httpStatusCode: result.status,
      ...json,
    }
  }

  state = {
    data: this.props.data,
  }

  handleUserInteraction = debounce(() => {
    if (!this.iframeWindow || !this.iframeWindow.packageJsonData) return;
    this.setState({ data: this.iframeWindow.packageJsonData() })
  }, 1000)

  handleGenerate = () => {
    const { router } = this.context
    const { slug } = this.props
    router.push(`/map?slug=${slug}&generate=true`, `/map/${slug}?generate=true`)
  }
  handleIWindowRef = window => { this.iframeWindow = window }

  handleOnLoad = ({ document, window }) => {
    if (this.props.data) {
      window.displayJsonData(this.props.data)
      window.hideLoadingMessage()
    }

    const svg = document.querySelector('svg#map')
    USER_INTERACTION_EVENTS.forEach(eventName => {
      window.addEventListener(eventName, this.handleUserInteraction)
      if (svg) svg.addEventListener(eventName, this.handleUserInteraction)
    })
  }
  handleOnUnload = ({ document, window }) => {
    const svg = document.querySelector('svg#map')
    USER_INTERACTION_EVENTS.forEach(eventName => {
      window.removeEventListener(eventName, this.handleUserInteraction)
      if (svg) svg.removeEventListener(eventName, this.handleUserInteraction)
    })
  }

  handleSave = () => {
    localStorage.setItem('mapJson', JSON.stringify(this.state.data))
  }

  render = () => {
    const { generate } = this.context.router.query
    const { data, isEditable } = this.props

    let contents
    if (data || (isEditable && generate)) {
      contents = (
        <IFrame
          bodyClasses={[isEditable ? 'editable' : 'readOnly']}
          className="map-frame"
          css={`
            .readOnly #viewbox, .readOnly #scaleBar {
              pointer-events: none;
            }
          `}
          onLoad={this.handleOnLoad}
          onUnload={this.handleOnUnload}
          src="/static/fantasy-map-generator"
          queryString={{ doNotGenerate: !!data || undefined }}
          title="map"
          windowRef={this.handleIWindowRef}
        />
      )
    } else if (isEditable) {
      contents = (
        <Alert className="center">
          {isEditable && <>
            {"This map doesn't exist. Would you like to "}
            <button className="safe" onClick={this.handleGenerate}>Generate It?</button>
          </>}
        </Alert>
      )
    } else {
      contents = (
        <Alert className="center">
          {"This map either doesn't exist, or you don't have permission to view it."}
        </Alert>
      )
    }

    return <div className="map page">{contents}</div>
  }
}
