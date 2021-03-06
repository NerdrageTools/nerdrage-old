import React, { Component } from 'react'
import { Link } from '~/components/Link/Link'
import CampaignSearchBox from '~/components/SearchBox/CampaignSearchBox'
import CampaignIcon from '~/icons/campaign.svg'
import RemoveIcon from '~/icons/remove.svg'
import './Sources.scss'

export default class Sources extends Component {
	static defaultProps = {
		className: '',
		readOnly: true,
		sources: [],
		title: 'Sources',
	}

	handleAddSource = source => {
		if (!source || this.props.sources.some(s => s._id === source._id)) { return }
		this.props.onSave([...this.props.sources, source])
	}
	handleRemoveSource = source => {
		if (!source || !this.props.sources.some(s => s._id === source._id)) { return }
		this.props.onSave(this.props.sources.filter(s => s._id !== source._id))
	}

	render = () => {
		const { className, placeholder, readOnly, sources, title } = this.props

		return (
			<div className={`sources ${className}`}>
				<div className="title">{title}</div>
				<ul className="source-list">
					{sources.map(source => (
						<li className="campaign row" key={source._id}>
							<CampaignIcon />
							<Link
								campaign={source}
								className="display"
								subdomain={source.subdomain}
								type="campaign"
							>
								<span className="title" title={source.title}>{source.title}</span>
							</Link>
							{!readOnly && <>
								<RemoveIcon
									className="remove icon"
									onClick={() => this.handleRemoveSource(source)}
								/>
							</>}
						</li>
					))}
				</ul>
				{!readOnly && (
					<CampaignSearchBox
						className="add-user"
						onSelect={this.handleAddSource}
						placeholder={placeholder}
					/>
				)}
			</div>
		)
	}
}
