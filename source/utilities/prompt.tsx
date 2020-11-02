import React from 'react'
import ReactDOM from 'react-dom'
import { Dialog } from '~/components/Dialog/Dialog'

interface PromptOptions {
	defaultValue?: string,
	title?: string,
}

export const prompt = async (
	text?: string,
	options?: PromptOptions,
): Promise<string> => {
	const container = document.createElement('div')
	document.body.appendChild(container)

	return new Promise<string>((resolve, reject) => {
		const inputRef = React.createRef<HTMLInputElement>()

		const handleCancel = () => reject()
		const handleOk = () => resolve(inputRef.current!.value)
		const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
				title={options?.title ?? 'Prompt'}
			>
				<div className="text">{text ?? ''}</div>
				<div className="input-wrapper">
					<input
						ref={inputRef}
						defaultValue={options?.defaultValue ?? ''}
						onKeyDown={handleKeyDown}
						type="text"
					/>
				</div>
			</Dialog>
		), container, () => {
			inputRef.current!.select()
			inputRef.current!.focus()
		})
	}).finally(() => {
		document.body.removeChild(container)
	})
}
