import React from 'react'
import ReactDOM from 'react-dom'
import CreateLinkDialog from '~/components/CreateLinkDialog/CreateLinkDialog'
import './prompt.scss'

export default async function promptLink({
	defaultText = '',
	defaultSlug = '',
	templateType = null,
	title = 'Create Link',
}) {
	const container = document.createElement('div')
	document.body.appendChild(container)

	return new Promise((resolve, reject) => {
		const onCancel = () => reject()
		const onOk = payload => resolve(payload)

		ReactDOM.render(
			<CreateLinkDialog {...{ defaultSlug, defaultText, onCancel, onOk, templateType, title }} />,
			container,
		)
	}).finally(() => {
		document.body.removeChild(container)
	})
}
