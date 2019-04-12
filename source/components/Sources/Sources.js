import React, { Component } from 'react'
import PageLink from '@/components/PageLink'
import CampaignSearchBox from '@/components/SearchBox/CampaignSearchBox'
import CampaignIcon from '@/icons/campaign.svg'
import RemoveIcon from '@/icons/remove.svg'
import './Sources.scss'

export default class Sources extends Component {
  static defaultProps = {
    className: '',
    readOnly: true,
    sources: [],
    title: 'Sources',
  }

  handleAddSource = source => {
    if (this.props.sources.some(s => s._id === source._id)) { return }
    this.props.onSave([...this.props.sources, source])
  }
  handleRemoveSource = source => {
    if (!this.props.sources.some(s => s._id === source._id)) { return }
    this.props.onSave(this.props.sources.filter(s => s._id !== source._id))
  }

  render = () => {
    const { className, readOnly, sources, title } = this.props

    return (
      <div className={`sources ${className}`}>
        <div className="title">{title}</div>
        <ul className="source-list">
          {sources.map(source => (
            <li className="campaign row" key={source._id}>
              <CampaignIcon />
              <PageLink
                campaign={source}
                className="display"
                subdomain={source.subdomain}
                type="campaign"
              >
                <span className="title" title={source.title}>{source.title}</span>
              </PageLink>
              {!readOnly && <>
                <RemoveIcon
                  className="remove icon"
                  onClick={() => this.handleRemoveSource(source)}
                />
              </>}
            </li>
          ))}
        </ul>
        {!readOnly && <CampaignSearchBox className="add-user" onSelect={this.handleAddSource} />}
      </div>
    )
  }
}
