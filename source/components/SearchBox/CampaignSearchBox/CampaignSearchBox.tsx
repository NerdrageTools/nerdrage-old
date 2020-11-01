import React from 'react'
import { SearchBox } from '~/components/SearchBox/SearchBox'
import CampaignIcon from '~/icons/campaign.svg'
import { noop } from '~/utilities/noop'

export class CampaignSearchBox extends React.Component {
	static styles = import('./CampaignSearchBox.scss')

	renderOption = (campaign, _, itemProps): JSX.Element => (
		<li key={campaign._id} className="search-result" {...itemProps}>
			<CampaignIcon />
			<b className="title">{campaign.title}</b>
		</li>
	)

	render = (): JSX.Element => {
		const { onSelect = noop, ...props } = this.props

		return (
			<SearchBox
				className="campaign"
				limit={5}
				onSelect={onSelect}
				placeholder="Search Campaigns..."
				renderOption={this.renderOption}
				url="/api/search/campaigns/:searchTerm"
				{...props}
			/>
		)
	}
}
