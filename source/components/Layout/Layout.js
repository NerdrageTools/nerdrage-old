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

  navigation = React.createRef()

  handleWindowResize = debounce(() => {
    let size = 'large'
    if (window.matchMedia('(min-width: 551px) and (max-width: 979px)').matches) {
      size = 'medium'
    } else if (window.matchMedia('(max-width: 550px)').matches) {
      size = 'small'
    }
    if (size !== this.state.size) this.setState({ size })
  }, 250)

  componentDidMount = () => {
    this.handleWindowResize()
    window.addEventListener('resize', this.handleWindowResize)
    document.addEventListener('mousedown', this.handleOutsideNavClick)
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowResize)
    document.removeEventListener('mousedown', this.handleOutsideNavClick)
  }

  collapseNavigation = () => {
    this.setState({ expandNavigation: false })
  }
  handleOutsideNavClick = ({ target }) => {
    if (this.state.expandNavigation && !this.navigation.current.contains(target)) {
      this.collapseNavigation()
    }
  }
  handleToggleNavigation = () => {
    this.setState({ expandNavigation: !this.state.expandNavigation })
  }

  render = () => {
    const { className } = this.props
    const { campaign, theme } = this.context
    const { expandNavigation, size } = this.state
    const title = campaign ? campaign.title : 'Unknown Campaign'
    const classNames = [
      'wiki layout',
      className,
      size,
      expandNavigation ? 'expand-navigation' : 'collapse-navigation',
    ].join(' ')

    return <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          key="content-font"
          href={`//fonts.googleapis.com/css?family=${theme.fontForText}|${theme.fontForTitles}`}
          rel="stylesheet"
        />
      </Head>
      <div className={classNames}>
        <Header onNavigationIconClick={this.handleToggleNavigation} />
        <div className="content">
          <Navigation onItemClick={this.collapseNavigation} wrapperRef={this.navigation} />
          {this.props.children}
        </div>
      </div>
    </>
  }
}
