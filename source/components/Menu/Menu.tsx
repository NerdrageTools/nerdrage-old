/* eslint-disable max-classes-per-file */
import cn from 'classnames'
import React, { Component } from 'react'
import MenuIcon from '~/icons/menu.svg'

interface Props {
	className?: string,
	icon?: JSX.Element,
	open?: boolean,
}

interface IMenuItem {
	className?: string,
	icon?: JSX.Element,
	onClick?: React.MouseEventHandler<HTMLDivElement>,
}

interface IMenuContext {
	parentMenu?: Menu,
	rootMenu?: Menu,
}

const MenuContext = React.createContext<IMenuContext>({})

class MenuItem extends React.Component<IMenuItem> {
	static contextType = MenuContext
	context!: React.ContextType<typeof MenuContext>

	handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
		this.context.parentMenu?.close()
		this.props.onClick?.(event)
	}
	render = (): JSX.Element => (
		<div
			className={cn(this.props.className, 'menu-item', { clickable: !!this.props.onClick })}
			onClick={this.handleClick}
		>
			{this.props.icon}
			{this.props.children}
		</div>
	)
}

export class Menu extends Component<Props> {
	static MenuItem = MenuItem
	static MenuContext = MenuContext
	static styles = import('./Menu.scss')
	static defaultProps: Props = {
		icon: <MenuIcon />,
	}

	state = {
		open: this.props.open ?? false,
	}
	#el = React.createRef<HTMLDivElement>()

	componentDidMount = (): void => {
		document.addEventListener('mousedown', this.handleOutsideClick)
	}
	componentWillUnmount = (): void => {
		document.removeEventListener('mousedown', this.handleOutsideClick)
	}

	public close = (): void => { this.setState({ open: false }) }
	public open = (): void => { this.setState({ open: true }) }
	public handleToggle = (): void => { this.setState({ open: !this.state.open }) }

	handleOutsideClick = ({ target }: MouseEvent): void => {
		if (this.state.open && !this.#el.current!.contains(target as Node)) {
			this.close()
		}
	}

	render = (): JSX.Element => {
		const { children, className, icon } = this.props
		const open = this.props.open !== undefined ? this.props.open : this.state.open

		return (
			<div ref={this.#el} className={cn(className, 'menu', { closed: !open, open })}>
				{open && (
					<MenuContext.Consumer>
						{menuContext => (
							<MenuContext.Provider
								value={{
									...menuContext,
									parentMenu: this,
									rootMenu: menuContext.rootMenu ?? this,
								}}
							>
								<div className="menu-panel">{children}</div>
							</MenuContext.Provider>
						)}
					</MenuContext.Consumer>
				)}
				<div className="menu-toggler" onClick={this.handleToggle}>{icon}</div>
			</div>
		)
	}
}
