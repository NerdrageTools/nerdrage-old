import SearchIcon from '@nerdrage/core/icons/search.svg'
import Campaign from '@nerdrage/wiki/contexts/Campaign'
import React, { Component } from 'react'
import './SearchBox.scss'

export default class SearchBox extends Component {
  static contextType = Campaign

  render() {
    const { onSearch } = this.props
    const { theme } = this.context

    return (
      <div className="search-box" style={{ color: theme.foreground }}>
        <SearchIcon className="search icon" />
        <input type="text" defaultValue="" onChange={onSearch} />
      </div>
    )
  }
}
