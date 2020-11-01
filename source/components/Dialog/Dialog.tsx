import React from 'react'
import Draggable from 'react-draggable'
import { noop } from '~/utilities/noop'

interface Props {
	buttons?: JSX.Element,
	className?: string,
	modal?: boolean,
	onCancel?: typeof noop,
	onKeyDown?: typeof noop,
	onOk?: typeof noop,
	showCancel?: boolean,
	title?: string,
}

export class Dialog extends React.Component<Props> {
	static styles = import('./Dialog.scss')
	static defaultProps: Props = {
		modal: false,
		onCancel: noop,
		onKeyDown: noop,
		onOk: noop,
		showCancel: true,
		title: 'Dialog',
	}

	render = () => (
		<div
			className={`dialog-wrapper ${this.props.modal ? 'modal' : ''}`}
			onKeyDown={this.props.onKeyDown}
		>
			<Draggable handle=".dialog > .title">
				<div className={`dialog ${this.props.className}`}>
					<div className="title">{this.props.title}</div>
					<div className="body">{this.props.children}</div>
					<div className="buttons">
						{this.props.buttons ?? <>
							<button className="ok button safe" onClick={this.props.onOk}>Ok</button>
							{this.props.showCancel && (
								<button className="cancel button link"
									onClick={this.props.onCancel}>Cancel</button>
							)}
						</>}
					</div>
				</div>
			</Draggable>
		</div>
	)
}
