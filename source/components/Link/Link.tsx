import NextLink from 'next/link'
import React, { FunctionComponent, useContext } from 'react'
import { Application } from '@/contexts/Application'

type TProps = {
	active?: boolean,
	className?: string,
	query?: Record<string, any>,
	slug: string,
	subdomain?: string,
	type: 'article' | 'campaign' | 'map' | 'sheet' | 'user',
}

export const Link: FunctionComponent<TProps> = ({
	active = false,
	children,
	className = '',
	query = null,
	slug = '',
	type = 'article',
	...props
}) => {
	const context = useContext(Application)
	const subdomain = props.subdomain || context.subdomain
	const { rootUrl } = useContext(Application)
	const contents = children || type

	const queryString = !query
		? ''
		: `${Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&')}`

	if (active) {
		const title = typeof contents === 'string' ? contents : undefined
		return <span className="active link" title={title}>{contents}</span>
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
