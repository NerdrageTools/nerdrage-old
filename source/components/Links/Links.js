import React from 'react'
import Link from '@/components/Link'
import TagIcon from '@/icons/tag.svg'
import './Links.scss'

const renderCampaignLink = campaign => (
	<li key={campaign.subdomain} title={campaign.title}>
		<Link {...campaign} type="campaign">{campaign.title}</Link>
	</li>
)
const renderPageLink = ({ slug, subdomain, title, type }) => (
	<li key={slug} title={title}>
		<Link {...{ slug, subdomain, type }}>{title}</Link>
	</li>
)


export default function Links({
	caption = 'Child Articles',
	className = '',
	icon = <TagIcon />,
	pages = [],
	type = 'article',
}) {
	if (!pages.length) return null

	let links = pages.sort((a, b) => a.title.localeCompare(b.title))
		.map(({ campaign = {}, ...props }) => ({ ...campaign, type, ...props }))

	if (type === 'campaign') {
		links = links.map(renderCampaignLink)
	} else {
		links = links.map(renderPageLink)
	}

	return (
		<div className={`links ${className}`.trim()}>
			<header>{icon} {caption}</header>
			<ul className="list">{links}</ul>
		</div>
	)
}
