import React from 'react'
import ReactDOM from 'react-dom'
import { Dialog } from '@/components/Dialog'
import './prompt.scss'

export async function prompt(text = '', { defaultValue = '', title = 'Prompt' } = {}) {
	const container = document.createElement('div')
	document.body.appendChild(container)

	return new Promise((resolve, reject) => {
		const inputBox = React.createRef()
		const handleCancel = () => reject()
		const handleOk = () => resolve(inputBox.current.value)

		const handleKeyDown = event => {
			switch (event.key) {
				case 'Enter':
					return handleOk()
				case 'Escape':
					return handleCancel()
				default:
					return undefined
			}
		}

		ReactDOM.render((
			<Dialog
				className="prompt"
				modal
				onCancel={handleCancel}
				onOk={handleOk}
				title={title}
			>
				<div className="text">{text}</div>
				<div className="input-wrapper">
					<input
						ref={inputBox}
						defaultValue={defaultValue}
						onKeyDown={handleKeyDown}
						type="text"
					/>
				</div>
			</Dialog>
		), container, () => {
			inputBox.current.select()
			inputBox.current.focus()
		})
	}).finally(() => {
		document.body.removeChild(container)
	})
}
