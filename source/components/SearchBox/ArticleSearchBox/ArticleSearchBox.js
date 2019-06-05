import React, { Component } from 'react'
import SearchBox from '@/components/SearchBox'
import Application from '@/contexts/Application'

export default class ArticleSearchBox extends Component {
  static contextType = Application

  handleHotKey = (_, __, ref) => {
    ref.inputBox.current.focus()
  }
  handleSelect = option => {
    const { router } = this.context

    if (option) {
      router.push(`/article?slug=${option.slug}`, `/article/${option.slug}`)
    }
  }

  render = () => (
    <SearchBox
      className="article"
      clearOnSelect
      hotkeys={{
        focus: { ctrlKey: true, key: 'F', shiftKey: true },
      }}
      onHotKey={this.handleHotKey}
      onSelect={this.handleSelect}
      placeholder="Search... (Ctrl+Shift+F)"
      url="/api/search/articles/:searchTerm"
    />
  )
}
