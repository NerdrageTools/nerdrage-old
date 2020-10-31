import React from 'react'
import { SearchBox } from '@/components/SearchBox'
import CampaignIcon from '@/icons/campaign.svg'
import { noop } from '@/utilities/noop'
import './CampaignSearchBox.scss'

const renderOption = (campaign, index, itemProps) => (
	<li key={campaign._id} className="search-result" {...itemProps}>
		<CampaignIcon />
		<b className="title">{campaign.title}</b>
	</li>
)

export function CampaignSearchBox({ onSelect = noop, ...props }) {
	return (
		<SearchBox
			className="campaign"
			limit={5}
			onSelect={onSelect}
			placeholder="Search Campaigns..."
			renderOption={renderOption}
			url="/api/search/campaigns/:searchTerm"
			{...props}
		/>
	)
}
