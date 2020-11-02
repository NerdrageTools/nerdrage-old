import React, { Component } from 'react'
import { Menu } from '~/components/Menu/Menu'
import { Application } from '~/contexts/Application'
import ArticleIcon from '~/icons/read.svg'
import SheetIcon from '~/icons/sheet.svg'
import { alert } from '~/utilities/alert'
import { promptLink } from '~/utilities/promptLink'

export class CreateMenu extends Component {
	static styles = import('./CreateMenu.scss')
	static contextType = Application
	context!: React.ContextType<typeof Application>

	handleNew = (type: string) => async (): Promise<void> => {
		const lowered = type.toLowerCase()
		try {
			const { slug, templateSlug, text } = await promptLink({
				defaultSlug: `new-${lowered}`,
				defaultText: `New ${type}`,
				templateType: type,
				title: `New ${type}...`,
			})

			let href = `/${lowered}?slug=${slug}&title=${text}`
			let asUrl = `/${lowered}/${slug}?title=${text}`

			if (templateSlug) {
				href += `&template=${templateSlug}`
				asUrl += `&template=${templateSlug}`
			}

			this.context.router!.push(href, asUrl)
		} catch (error) {
			console.log(error) // eslint-disable-line no-console
		}
	}

	handleNewCampaign = async (): Promise<void> => {
		const { rootUrl } = this.context

		try {
			const { slug, text } = await promptLink({
				defaultSlug: 'new-campaign',
				defaultText: 'New Campaign',
				slugLabel: 'Subdomain',
				textLabel: 'Title',
				title: 'New Campaign...',
			})

			const response = await fetch(`/api/campaign/${slug}`, {
				body: JSON.stringify({ subdomain: slug, title: text }),
				credentials: 'include',
				method: 'PUT',
			})

			if (response.status === 201) {
				this.context.router!.push(`//${slug}.${rootUrl}/campaign`)
			} else {
				const json = await response.json()
				alert(json.message, 'Error')
			}
		} catch (error) {
			console.error(error) // eslint-disable-line no-console
		}
	}

	render = (): JSX.Element => {
		const { isEditor, isParticipant } = this.context.campaign || {}
		const { isAdmin } = this.context.user || {}

		return <>
			{isAdmin && (
				<Menu.MenuItem icon={<SheetIcon />} onClick={this.handleNewCampaign}>
					New Campaign...
				</Menu.MenuItem>
			)}
			{isEditor && (
				<Menu.MenuItem icon={<ArticleIcon />} onClick={this.handleNew('Article')}>
					New Article...
				</Menu.MenuItem>
			)}
			{isParticipant && (
				<Menu.MenuItem icon={<SheetIcon />} onClick={this.handleNew('Sheet')}>
					New Sheet...
				</Menu.MenuItem>
			)}
			<hr />
		</>
	}
}
