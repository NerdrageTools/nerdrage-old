import React from 'react'

type TProps = {
	className: string,
}

export class Alert extends React.Component<TProps> {
	static styles = import('./Alert.scss')

	render = (): JSX.Element => (
		<div className={`alert ${this.props.className}`}>
			{this.props.children}
		</div>
	)
}
