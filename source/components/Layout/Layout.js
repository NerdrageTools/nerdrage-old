import Head from 'next/head'
import React, { Component } from 'react'
import Navigation from '@/components/Navigation'
import ArticleSearchBox from '@/components/SearchBox/ArticleSearchBox'
import UserMenu from '@/components/UserMenu'
import Application from '@/contexts/Application'
import Logo from '@/icons/fist.svg'
import NavigationIcon from '@/icons/Navigation'
import debounce from '@/utilities/debounce'
import './Layout.scss'

const getWindowSize = () => {
	if (typeof window === 'undefined') return 'server'
	if (window.matchMedia('(min-width: 551px) and (max-width: 979px)').matches) return 'medium'
	if (window.matchMedia('(max-width: 550px)').matches) return 'small'
	return 'large'
}

export default class Layout extends Component {
	static contextType = Application

	state = {
		expanded: false,
		size: getWindowSize(),
		ssrDone: false,
	}

	navigation = React.createRef()
	navigationIcon = React.createRef()

	handleWindowResize = debounce(() => {
		const size = getWindowSize()
		this.setState({ size })
		this.context.setSize(size)
	}, 100)

	componentDidMount = () => {
		this.setState({ ssrDone: true })
		this.handleWindowResize()
		window.addEventListener('resize', this.handleWindowResize)
		document.addEventListener('mousedown', this.handleOutsideNavClick)
	}
	componentWillUnmount = () => {
		window.removeEventListener('resize', this.handleWindowResize)
		document.removeEventListener('mousedown', this.handleOutsideNavClick)
	}

	collapseNavigation = () => {
		this.setState({ expanded: false })
	}
	toggleNavigation = () => {
		this.setState({ expanded: !this.state.expanded })
	}
	handleOutsideNavClick = ({ target }) => {
		if (
			this.state.expanded // only collapse if expanded
			&& !this.navigation.current.contains(target) // and the click isn't in the nav
			&& this.navigationIcon.current !== target // and the click isn't on the nav icon
		) {
			this.collapseNavigation()
		}
	}

	render = () => {
		const { className } = this.props
		const { campaign, theme } = this.context
		const { expanded, size } = this.state
		const title = campaign ? campaign.title : 'Unknown Campaign'
		const classNames = [
			'wiki layout',
			className,
			expanded ? 'expand-navigation' : 'collapse-navigation',
			this.state.ssrDone ? size : 'server',
		].filter(Boolean).join(' ')

		return <>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					key="content-font"
					href={`//fonts.googleapis.com/css?family=${theme.fontForText}:400,400i,700,700i|${theme.fontForTitles}&display=swap`}
					rel="stylesheet"
				/>
			</Head>
			<div className={classNames}>
				<div className="header">
					<div className="logo">
						<Logo className="logo x2" />
						<div className="nerd">Nerd</div>
						<div className="rage">RAGE</div>
					</div>
					<ArticleSearchBox />
					<NavigationIcon
						className="navigation toggle" onClick={this.toggleNavigation}
						wrapperRef={this.navigationIcon}
					/>
					<UserMenu />
				</div>
				<div className="content">
					<Navigation onItemClick={this.collapseNavigation} wrapperRef={this.navigation} />
					{this.props.children}
				</div>
			</div>
		</>
	}
}
