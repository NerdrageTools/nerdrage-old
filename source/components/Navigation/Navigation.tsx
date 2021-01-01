import React, { Component, MouseEvent } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import Sortable from 'sortablejs'
import { Link, LinkType } from '~/components/Link/Link'
import { Application } from '~/contexts/Application'
import CampaignIcon from '~/icons/campaign.svg'
import EditIcon from '~/icons/edit.svg'
import FavoriteIcon from '~/icons/favorite-on.svg'
import DeleteIcon from '~/icons/remove.svg'
import SheetIcon from '~/icons/sheet.svg'
import { IUserProfile } from '~/server/models'
import { INavigation } from '~/server/schema/INavigation'
import { noop } from '~/utilities/noop'
import { pluck } from '~/utilities/pluck'
import { prompt } from '~/utilities/prompt'

interface Props {
	items: INavigation[],
	wrapperRef: React.RefObject<HTMLDivElement>,
}

export class Navigation extends Component<Props> {
	static styles = import('./Navigation.scss')
	static contextType = Application
	static defaultProps = {
		items: [],
		onItemClick: noop,
		wrapperRef: noop,
	}
	context!: React.ContextType<typeof Application>

	#campaignNav = React.createRef<HTMLDivElement>()
	#sortable!: Sortable

	componentDidMount = (): void => { this.initializeSortable() }
	componentDidUpdate = (): void => { this.initializeSortable() }

	get allowEditing(): boolean {
		return this.context.campaign.isEditor === true
	}

	initializeSortable = (): void => {
		if (!this.#campaignNav.current) return
		if (this.#sortable) this.#sortable.destroy()

		const ul = this.#campaignNav.current.querySelector('ul')!
		const { navigation } = this.context.campaign

		this.#sortable = Sortable.create(ul, {
			disabled: !this.allowEditing || this.context.size === 'small',
			dragClass: 'dragging',
			draggable: 'li',
			onEnd: () => {
				const updated = Array.from(ul.querySelectorAll('li'))
					.map(li => li.getAttribute('data-id'))
					.map(id => navigation.find(navLink => navLink.id === id))
					.filter(Boolean) as INavigation[]

				this.context.updateCampaign({ navigation: updated })
			},
		})
	}

	promptForLinkDetails = async (item: Partial<INavigation> = {}): Promise<INavigation | null> => {
		try {
			const title = await prompt('New Title?', { defaultValue: item.title, title: 'Set Title' })
			if (!title) return null

			const slug = await prompt('Slug to link to?', {
				defaultValue: item.slug ?? '',
				placeholder: 'Leave blank to create a header...',
				title: 'Set Slug',
			})

			return { slug, title } as INavigation
		} catch (_) {
			return null
		}
	}

	handleAddLink = async (): Promise<void> => {
		const newLink = await this.promptForLinkDetails()
		if (!newLink) { return }

		this.context.updateCampaign({
			navigation: [...this.context.campaign.navigation, newLink],
		})
	}
	handleDelete = ({ currentTarget }: MouseEvent<SVGElement>): void => {
		const id: string = currentTarget.getAttribute('data-id')!
		const { navigation } = this.context.campaign

		this.context.updateCampaign({
			navigation: navigation.filter(item => item.id !== id),
		})
	}
	handleEdit = async ({ currentTarget }: MouseEvent<SVGElement>): Promise<void> => {
		const id = currentTarget.getAttribute('data-id')
		const navigation = [...this.context.campaign.navigation]
		const item = navigation.find(navItem => navItem.id === id)
		if (!item) { return }

		const edited = await this.promptForLinkDetails(item)

		if (!edited) { return }

		navigation.splice(navigation.indexOf(item), 1, edited)
		this.context.updateCampaign({ navigation })
	}

	renderList = (
		list: INavigation[] = [],
		listTitle: JSX.Element | string = '',
		type: LinkType = 'article',
		campaignLink: JSX.Element | null = null,
	): JSX.Element => <>
		{(campaignLink || Boolean(list.length)) && (
			<div className="list-title">{campaignLink || listTitle}</div>
		)}
		<ul>
			{list.map(({ id, slug, title }, index) => {
				const { subdomain = '', title: cTitle = '' } = this.context.campaign
				let text: string = title
				if (type !== 'campaign' && subdomain && subdomain !== this.context.subdomain) {
					text += ` (${cTitle || subdomain})`
				}

				if (!slug) {
					return (
						<li key={id || index} className="section" data-id={id} title={title}>
							<b>{text}</b>
							{this.context.campaign.isEditor && (
								<div className="controls">
									<EditIcon className="edit" data-id={id} onClick={this.handleEdit} />
									<DeleteIcon className="delete" data-id={id} onClick={this.handleDelete} />
								</div>
							)}
						</li>
					)
				}

				return (
					<li key={id || index} data-id={id} title={title}>
						<Link {...{ slug, type }}>{text}</Link>
						{this.context.campaign.isEditor && (
							<div className="controls">
								<EditIcon className="edit" data-id={id} onClick={this.handleEdit} />
								<DeleteIcon className="delete" data-id={id} onClick={this.handleDelete} />
							</div>
						)}
					</li>
				)
			})}
		</ul>
	</>

	render = (): JSX.Element | null => {
		const user = this.context.user ?? {} as IUserProfile
		const campaign = this.context.campaign

		if (!campaign?.navigation) { return null }

		const navigation = campaign.navigation.map(link => ({
			...link,
			campaign: pluck(campaign, 'id', 'subdomain', 'title'),
		}))
		const favorites = (user.favorites ?? []).filter(link => (
			link.subdomain === campaign.subdomain
		))
		const sheets = (user.sheets ?? []).filter(sheet => (
			sheet.subdomain === campaign.subdomain
		))

		return (
			<div className="navigation">
				<Scrollbars autoHide className="scrollbars link-sections" universal>
					<div ref={this.props.wrapperRef} className="content">
						<div ref={this.#campaignNav} className="campaign-nav">
							{this.renderList(navigation, campaign.title, 'article', <>
								<CampaignIcon />
								<Link subdomain={campaign.subdomain} type="campaign">{campaign.title}</Link>
							</>)}
						</div>
						{user && <>
							{Boolean(favorites.length) && (
								this.renderList(favorites, <><FavoriteIcon />{' Favorites'}</>)
							)}
							{Boolean(sheets.length) && (
								this.renderList(sheets, <><SheetIcon />{' Sheets'}</>, 'sheet')
							)}
						</>}
					</div>
				</Scrollbars>
				<div className="footer">
					{campaign.isEditor && (
						<div className="buttons">
							<button className="add safe" onClick={this.handleAddLink}>Add Link</button>
						</div>
					)}
					<Link slug="tos" subdomain="www" type="article">Terms of Service</Link>
				</div>
			</div>
		)
	}
}
