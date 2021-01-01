import React from 'react'
import { OptionProps, SearchBox } from '~/components/SearchBox/SearchBox'
import CampaignIcon from '~/icons/campaign.svg'
import { ICampaignLink } from '~/server/schema/ICampaign'

export class CampaignSearchBox extends SearchBox<ICampaignLink> {
	static displayName = 'SearchBox<Campaign>'
	static styles = import('./CampaignSearchBox.scss')
	readonly clearOnSelect: boolean = true
	readonly placeholder: string = 'Search Campaigns...'
	readonly typeName: string = 'campaign'
	readonly url: string = '/api/search/campaigns/:searchTerm'

	getValue = (campaign: ICampaignLink): string => campaign.id!
	renderOption = (campaign: ICampaignLink, _: number, itemProps: OptionProps): JSX.Element => (
		<li key={campaign.id} className="search-result" {...itemProps}>
			<CampaignIcon />
			<b className="title">{campaign.title}</b>
		</li>
	)
}
