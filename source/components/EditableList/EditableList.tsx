import React, { ChangeEvent, Component } from 'react'
import { noop } from '~/utilities/noop'

interface Props {
	className?: string,
	defaultValue?: string,
	onChange?: (value: string) => void,
	options?: string[],
}

export class EditableList extends Component<Props> {
	static styles = import('./EditableList.scss')
	static defaultProps = {
		className: '',
		defaultValue: '',
		onChange: noop,
		options: [],
	}

	state = {
		selected: this.props.defaultValue,
	}

	handleChange = ({ target }: ChangeEvent<HTMLSelectElement>): void => {
		this.props.onChange!(target.value)
	}

	render = (): JSX.Element => {
		const { className, options } = this.props
		const { selected } = this.state

		return (
			<select
				className={`editable-list ${className}`} defaultValue={selected}
				onChange={this.handleChange}
			>
				{options!.map(option => (
					<option key={option} value={option}>{option}</option>
				))}
			</select>
		)
	}
}
