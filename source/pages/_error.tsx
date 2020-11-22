import React, { useContext } from 'react'
import { Application } from '~/contexts/Application'
import '~/pages/_error.scss'

interface Props {
	message?: string, // eslint-disable-line react/require-default-props
	statusCode?: number, // eslint-disable-line react/require-default-props
}

export default function Error(props: Props): JSX.Element {
	const { query } = useContext(Application).router!

	return (
		<div className="error page">
			<h1 className="status-code">{props.statusCode ?? query.statusCode ?? 500}</h1>
			<div className="message">{props.message ?? 'An error occurred.'}</div>
		</div>
	)
}
