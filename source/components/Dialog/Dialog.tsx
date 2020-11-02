import React from 'react'
import Draggable from 'react-draggable'

interface Props {
	buttons?: JSX.Element,
	className?: string,
	modal?: boolean,
	onCancel?: () => void,
	onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>,
	onOk?: () => void,
	showCancel?: boolean,
	title?: string,
}

export class Dialog<P extends Record<string, any>, S = never, C = never>
	extends React.Component<P & Omit<Props, keyof P>, S, C> {
	static styles = import('./Dialog.scss')
	static defaultProps: Props = {
		modal: false,
		showCancel: true,
		title: 'Dialog',
	}

	handleCancel = (): void => { this.props.onCancel?.() }
	handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = event => {
		this.props.onKeyDown?.(event)
	}
	handleOk = (): void => { this.props.onOk?.() }

	renderBody = (): JSX.Element | null => null
	render = (): JSX.Element => (
		<div
			className={`dialog-wrapper ${this.props.modal ? 'modal' : ''}`}
			onKeyDown={this.handleKeyDown}
		>
			<Draggable handle=".dialog > .title">
				<div className={`dialog ${this.props.className}`}>
					<div className="title">{this.props.title}</div>
					<div className="body">{this.renderBody() ?? this.props.children}</div>
					<div className="buttons">
						{this.props.buttons ?? <>
							<button className="ok button safe" onClick={this.handleOk}>Ok</button>
							{this.props.showCancel && (
								<button className="cancel button link" onClick={this.handleCancel}>Cancel</button>
							)}
						</>}
					</div>
				</div>
			</Draggable>
		</div>
	)
}
