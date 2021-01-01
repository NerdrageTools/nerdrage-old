import NextLink from 'next/link'
import React, { useContext } from 'react'
import Application from '@/contexts/Application'

export default function Link({
	active,
	children,
	className = '',
	query = null,
	slug = '',
	type = 'article',
	...props
}) {
	const context = useContext(Application)
	const subdomain = props.subdomain || context.subdomain
	const { rootUrl } = useContext(Application)
	const contents = children || type
	const queryString = !query ? '' : `${Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&')}`

	if (!slug && props.href) {
		return <a {...props}>{children}</a>
	}

	if (active) {
		return <span className="active link" title={contents}>{contents}</span>
	}

	if (subdomain && (!context.campaign || subdomain !== context.campaign.subdomain)) {
		let href = `//${subdomain}.${rootUrl}/${type}`
		if (type !== 'campaign') href += `/${slug}`

		return <a {...{ ...props, href, subdomain }}>{contents}</a>
	}

	let as = `/${type}`
	let href = `/${type}`
	if (type !== 'campaign') {
		if (slug) {
			as += `/${slug}`
			href += `?slug=${slug}`
		}
		if (queryString) {
			as += `?${queryString}`
			href += `&${queryString}`
		}
	} else if (queryString) {
		as += `?${queryString}`
		href += `?${queryString}`
	}

	return (
		<NextLink {...{ as, href }}>
			<a {...{ ...props, className, href: as }}>{contents}</a>
		</NextLink>
	)
}
