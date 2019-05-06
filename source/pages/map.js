import React, { Component } from 'react'
import IFrame from '@/components/IFrame'
import Application from '@/contexts/Application'
import debounce from '@/utilities/debounce'
import './map.scss'

const USER_INTERACTION_EVENTS = ['mousedown', 'mouseup', 'keydown', 'keyup']
export default class Map extends Component {
  static contextType = Application
  static defaultProps = {
    data: null,
    readOnly: false,
  }

  state = {
    data: this.props.data,
  }

  handleUserInteraction = debounce(() => {
    this.setState({ data: this.iframeWindow.packageJsonData() })
  }, 1000)

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

  render = () => (
    <div className="map page">
      <IFrame
        bodyClasses={[this.props.readOnly ? 'readOnly' : '']}
        className="map-frame"
        css={`
          .readOnly #viewbox, .readOnly #scaleBar {
            pointer-events: none;
          }
        `}
        onLoad={this.handleOnLoad}
        onUnload={this.handleOnUnload}
        src="/static/fantasy-map-generator"
        queryString={{ doNotGenerate: !!this.props.data || undefined }}
        title="map"
        windowRef={this.handleIWindowRef}
      />
    </div>
  )
}
