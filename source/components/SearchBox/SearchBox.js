import React, { Component } from 'react'
import Application from '@/contexts/Application'
import SearchIcon from '@/icons/search.svg'
import './SearchBox.scss'

export default class SearchBox extends Component {
  static contextType = Application

  render() {
    const { onSearch } = this.props
    const { theme } = this.context.campaign

    return (
      <div className="search-box" style={{ color: theme.foreground }}>
        <SearchIcon className="search icon" />
        <input type="text" defaultValue="" onChange={onSearch} />
      </div>
    )
  }
}
