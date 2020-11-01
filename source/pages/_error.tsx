import React, { useContext } from 'react'
import { Application } from '~/contexts/Application'
import '~/pages/_error.scss'

export default function Error() {
	const { router } = useContext(Application)
	const { query } = router

	return (
		<div className="error page">
			<h1 className="status-code">{query.statusCode || 500}</h1>
			<div className="message">An error occurred.</div>
		</div>
	)
}
