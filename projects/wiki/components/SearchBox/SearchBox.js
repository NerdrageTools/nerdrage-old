import SearchIcon from 'core/icons/search.svg'
import React from 'react'
import './SearchBox.scss'

export default function SearchBox({
  onSearch,
}) {
  return (
    <div className="search-box">
      <SearchIcon className="search icon" />
      <input type="text" defaultValue="" onChange={onSearch} />
    </div>
  )
}
