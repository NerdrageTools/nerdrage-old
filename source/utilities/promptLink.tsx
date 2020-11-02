import React from 'react'
import ReactDOM from 'react-dom'
import { CreateLinkDialog, INewLink } from '~/components/CreateLinkDialog/CreateLinkDialog'

interface PromptProps {
	defaultSlug?: string,
	defaultText?: string,
	slugLabel?: string,
	templateType?: string,
	textLabel?: string,
	title?: string,
}

export async function promptLink({
	defaultText = '',
	defaultSlug = '',
	slugLabel,
	templateType,
	textLabel,
	title = 'Create Link',
}: PromptProps): Promise<INewLink> {
	const container = document.createElement('div')
	document.body.appendChild(container)

	return new Promise<INewLink>((resolve, reject) => {
		ReactDOM.render(
			<CreateLinkDialog
				onCancel={() => reject()}
				onOk={(newLink: INewLink) => resolve(newLink)}
				{...{ defaultSlug, defaultText, slugLabel, templateType, textLabel, title }}
			/>,
			container,
		)
	}).finally(() => {
		document.body.removeChild(container)
	})
}
