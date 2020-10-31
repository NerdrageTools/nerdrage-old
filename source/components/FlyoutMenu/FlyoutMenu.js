import React, { Component } from 'react'
import MenuIcon from '@/icons/menu.svg'
import { noop } from '@/utilities/noop'
import './FlyoutMenu.scss'

export class FlyoutMenu extends Component {
  static defaultProps = {
  	children: [],
  	className: '',
  	icon: MenuIcon,
  	open: undefined,
  }

  state = {
  	open: this.props.open !== undefined ? this.props.open : false,
  }
  el = React.createRef()

  componentDidMount = () => {
  	document.addEventListener('mousedown', this.handleOutsideClick)
  }
  componentWillUnmount = () => {
  	document.removeEventListener('mousedown', this.handleOutsideClick)
  }

  close = () => this.setState({ open: false })
  open = () => this.setState({ open: true })
  handleOutsideClick = ({ target }) => {
  	if (this.state.open && !this.el.current.contains(target)) this.close()
  }
  toggleOpen = () => this.setState({ open: !this.state.open })

  render = () => {
  	const { children, className, icon: Icon } = this.props
  	const open = this.props.open !== undefined ? this.props.open : this.state.open

  	return (
	<div ref={this.el} className={`${className} flyout menu ${open ? 'open' : 'closed'}`}>
	{open && <div className="flyout-panel">{children}</div>}
	<div className="menu-toggler" onClick={this.toggleOpen}><Icon /></div>
  		</div>
  	)
  }
}

export function MenuItem({
	children = null,
	className = '',
	onClick = noop,
}) {
	const clickable = onClick !== noop
	const classNames = [
		className,
		'menu-item',
		clickable ? 'clickable' : '',
	].filter(Boolean).join(' ')

	return (
		<div className={classNames} onClick={onClick}>
			{children}
		</div>
	)
}
