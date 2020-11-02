import React from 'react'
import { CustomPicker, GithubPicker } from 'react-color'
import type { ColorWrapChangeHandler } from 'react-color/lib/components/common/ColorWrap'
import { noop } from '~/utilities/noop'

const defaultColors = [
	'#000000', '#FFFFFF',
	'#A6808C', '#D6CFCB',
	'#6E0E0A', '#60594D',
	'#006B76', '#042A2B',
	'#124E78', '#5EB1BF',
]

interface Props {
	colors?: string[],
	disabled?: boolean,
	hex?: string,
	onChange?: ColorWrapChangeHandler,
	text?: string,
	textColor?: string,
}

interface State {
	open: boolean,
}

// eslint-disable-next-line react/display-name
export const ColorPicker = CustomPicker(class extends React.Component<Props, State> {
	static styles = import('./ColorPicker.scss')
	static defaultProps = {
		colors: defaultColors.slice(),
		disabled: false,
		hex: defaultColors[0],
		onChange: noop,
		text: '',
		textColor: 'inherit',
	}

	state = {
		open: false,
	}

	#wrapper = React.createRef<HTMLDivElement>()

	componentDidMount = () => {
		document.addEventListener('mousedown', this.handleClickOutside)
	}
	componentWillUnmount = () => {
		document.removeEventListener('mousedown', this.handleClickOutside)
	}

	handleClickOutside = ({ target }: MouseEvent) => {
		if (!this.#wrapper.current?.contains(target as Node)) {
			this.setState({ open: false })
		}
	}
	handleToggleOpen = () => this.setState(state => ({ ...state, open: !state.open }))

	render = () => {
		const { colors, hex, onChange, disabled, text, textColor } = this.props
		const { open } = this.state

		return (
			<div ref={this.#wrapper}
				className={`color-picker input ${disabled ? 'readonly' : ''}`}
			>
				<button className="swatch" disabled={disabled} onClick={this.handleToggleOpen}
					style={{
						background: hex,
						color: textColor,
					}}
				>
					{text}
				</button>
				{open && !disabled && (
					<GithubPicker
						{...{ colors, hex, onChange }}
						triangle="top-left"
						width="auto"
					/>
				)}
			</div>
		)
	}
})

ColorPicker.displayName = 'ColorPicker'
