import { Link } from '@/components/Link/Link'
import { Application } from '@/contexts/Application'
import React, { useContext } from 'react'
import './_error.scss'

export default function Error404() {
	const { router } = useContext(Application)
	if (process.browser) {
		window.setTimeout(() => router.push('/article/home'), 3_000)
	}

	return (
		<div className="error page">
			<h1 className="status-code">400</h1>
			<div className="message">
				<div>
					page not found :( <br />
					<i>redirecting to <Link slug="home" type="article">Home</Link> in 3s</i>
				</div>
			</div>
		</div>
	)
}
