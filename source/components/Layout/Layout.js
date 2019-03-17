import Head from 'next/head'
import React, { Component } from 'react'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Application from '@/contexts/Application'
import debounce from '@/utilities/debounce'
import './Layout.scss'

export default class Layout extends Component {
  static contextType = Application

  state = {
    expandNavigation: false,
    size: 'large',
  }

  handleWindowResize = debounce(() => {
    let size = 'large'
    if (window.matchMedia('(min-width: 551px) and (max-width: 979px)').matches) {
      size = 'medium'
    } else if (window.matchMedia('(max-width: 550px)').matches) {
      size = 'small'
    }
    if (size !== this.state.size) this.setState({ size })
  }, 250)

  componentDidMount() {
    this.handleWindowResize()
    window.addEventListener('resize', this.handleWindowResize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  handleToggleNavigation = () => {
    this.setState({ expandNavigation: !this.state.expandNavigation })
  }

  render = () => {
    const { campaign, theme } = this.context
    const { expandNavigation, size } = this.state
    const name = campaign ? campaign.name : 'Unknown Campaign'
    const classNames = [
      'wiki layout',
      size,
      expandNavigation ? 'expand-navigation' : 'collapse-navigation'
    ].join(' ')

    return <>
      <Head>
        <title>{name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          key="content-font"
          href={`//fonts.googleapis.com/css?family=${theme.fontFamily}:400,400i,700,700i`}
          rel="stylesheet"
        />
      </Head>
      <div className={classNames}>
        <Header onNavigationIconClick={this.handleToggleNavigation} />
        <div className="content">
          {<Navigation />}
          {this.props.children}
        </div>
      </div>
    </>
  }
}
