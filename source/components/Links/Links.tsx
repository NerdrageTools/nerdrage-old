import cn from 'classnames'
import React from 'react'
import { Link } from '~/components/Link/Link'
import TagIcon from '~/icons/tag.svg'
import { IArticleLink } from '~/server/models'
import { ICampaignLink } from '~/server/schema/ICampaign'

interface Props<T> {
	caption?: string,
	className?: string,
	icon?: JSX.Element | null,
	pages?: T[],
	type?: 'article' | 'campaign' | 'sheet',
}

export class Links<T extends IArticleLink | ICampaignLink = IArticleLink>
	extends React.Component<Props<T>> {
	static styles = import('./Links.scss')
	static defaultProps = {
		caption: 'Child Articles',
		icon: <TagIcon />,
		pages: [],
		type: 'article',
	}

	renderCampaignLink = ({ subdomain, title }: ICampaignLink): JSX.Element => (
		<li key={subdomain} title={title}>
			<Link subdomain={subdomain} type="campaign">{title}</Link>
		</li>
	)

	renderArticleLink = ({ slug, subdomain, title }: IArticleLink): JSX.Element => (
		<li key={slug} title={title}>
			<Link {...{ slug, subdomain }} type="article">{title}</Link>
		</li>
	)

	render = (): JSX.Element | null => {
		const { caption, className, icon, pages, type } = this.props

		if (!pages!.length) return null

		const links = pages!.sort((a, b) => a.title?.localeCompare(b.title))
			.map(link => (
				type === 'campaign'
					? this.renderCampaignLink(link as ICampaignLink)
					: this.renderArticleLink(link as IArticleLink)
			))

		return (
			<div className={cn('links', className)}>
				<header>{icon}{' '}{caption}</header>
				<ul className="list">{links}</ul>
			</div>
		)
	}
}
