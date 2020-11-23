import debounce from 'lodash.debounce'
import Head from 'next/head'
import React, { Component } from 'react'
import { Navigation } from '~/components/Navigation/Navigation'
import { ArticleSearchBox } from '~/components/SearchBox/ArticleSearchBox/ArticleSearchBox'
import { UserMenu } from '~/components/UserMenu/UserMenu'
import { Application } from '~/contexts/Application'
import Logo from '~/icons/fist.svg'
import { NavigationIcon } from '~/icons/Navigation'
import { IArticleSearchResult } from '~/server/models'

type WindowSize = 'server' | 'small' | 'medium' | 'large'

interface State {
	expanded: boolean,
	size: WindowSize,
	ssrDone: boolean,
}

export class Layout extends Component<any, State> {
	static styles = import('./Layout.scss')
	static contextType = Application
	static getWindowSize = (): WindowSize => {
		if (!process.browser) return 'server'
		if (window.matchMedia('(min-width: 551px) and (max-width: 979px)').matches) return 'medium'
		if (window.matchMedia('(max-width: 550px)').matches) return 'small'
		return 'large'
	}

	state = {
		expanded: false,
		size: Layout.getWindowSize(),
		ssrDone: false,
	}

	#navigation = React.createRef<HTMLDivElement>()
	#toggle = React.createRef<SVGSVGElement>()

	handleWindowResize = debounce(() => {
		const size = Layout.getWindowSize()
		this.setState({ size })
		this.context.setSize(size)
	}, 100, { leading: true })

	componentDidMount = (): void => {
		this.setState({ ssrDone: true })
		this.handleWindowResize()
		window.addEventListener('resize', this.handleWindowResize)
		document.addEventListener('mousedown', this.handleOutsideNavClick)
	}
	componentWillUnmount = (): void => {
		window.removeEventListener('resize', this.handleWindowResize)
		document.removeEventListener('mousedown', this.handleOutsideNavClick)
	}

	handleArticleSearch = (option: IArticleSearchResult): void => {
		if (!option) { return }
		this.context.router.push(`/article?slug=${option.slug}`, `/article/${option.slug}`)
	}
	handleCollapseNavigation = (): void => this.setState({ expanded: false })
	handleToggleNavigation = (): void => this.setState({ expanded: !this.state.expanded })
	handleOutsideNavClick = ({ target }: MouseEvent): void => {
		if (
			this.state.expanded // only collapse if expanded
			&& !this.#navigation.current!.contains(target as Node) // and the click isn't in the nav
			&& this.#toggle.current !== target // and the click isn't on the nav icon
		) {
			this.handleCollapseNavigation()
		}
	}

	render = (): JSX.Element => {
		const { campaign, theme } = this.context
		const { expanded, size } = this.state
		const title = campaign ? campaign.title : 'Unknown Campaign'
		const classNames = [
			'wiki layout',
			expanded ? 'expand-navigation' : 'collapse-navigation',
			this.state.ssrDone ? size : 'server',
		].filter(Boolean).join(' ')

		return <>
			<Head>
				<title>{title}</title>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link
					key="content-font"
					// eslint-disable-next-line max-len
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
					<ArticleSearchBox onSelect={this.handleArticleSearch} />
					<NavigationIcon className="navigation toggle"
						onClick={this.handleToggleNavigation} wrapperRef={this.#toggle}
					/>
					<UserMenu />
				</div>
				<div className="content">
					<Navigation onItemClick={this.handleCollapseNavigation} wrapperRef={this.#navigation} />
					{this.props.children}
				</div>
			</div>
		</>
	}
}
