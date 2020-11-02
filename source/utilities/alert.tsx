import React from 'react'
import ReactDOM from 'react-dom'
import { Dialog } from '~/components/Dialog/Dialog'

export async function alert(text = '', title = 'Prompt'): Promise<void> {
	const container = document.createElement('div')
	document.body.appendChild(container)

	return new Promise<void>(resolve => {
		ReactDOM.render((
			<Dialog className="prompt" modal onOk={() => resolve()} showCancel={false} title={title}>
				<div className="text">{text}</div>
			</Dialog>
		), container)
	}).finally(() => {
		document.body.removeChild(container)
	})
}
