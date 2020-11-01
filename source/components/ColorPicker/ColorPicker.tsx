import React, { useEffect, useState, useRef } from 'react'
import { CustomPicker, GithubPicker } from 'react-color'
import './ColorPicker.scss'
import { noop } from '@/utilities/noop'

const defaultColors = [
	'#000000', '#FFFFFF',
	'#A6808C', '#D6CFCB',
	'#6E0E0A', '#60594D',
	'#006B76', '#042A2B',
	'#124E78', '#5EB1BF',
]

function Picker({
	className = '',
	colors = defaultColors,
	hex = defaultColors[0],
	onChange = noop,
	popover = true,
	readOnly = false,
	text = '',
	textColor = 'inherit',
	triangle = 'top-right',
	width = 'auto',
}) {
	const wrapper = useRef()
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const handleClickOutside = ({ target }) => {
			if (!wrapper.current.contains(target)) setOpen(false)
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [true])

	return (
		<div ref={wrapper} className={`color-picker input ${className} ${readOnly ? 'readonly' : ''}`}>
			<button
				className="swatch"
				disabled={readOnly}
				onClick={() => setOpen(!open)}
				style={{ background: hex, color: textColor }}
			>
				{text}
			</button>
			{open && <GithubPicker {...{
				colors, hex, onChange, popover, triangle, width,
			}}
			/>}
		</div>
	)
}

export const ColorPicker = CustomPicker(Picker)
