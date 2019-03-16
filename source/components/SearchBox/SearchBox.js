import Downshift from 'downshift'
import React, { Component } from 'react'
import Application from '@/contexts/Application'
import SearchIcon from '@/icons/search.svg'
import './SearchBox.scss'

export default class SearchBox extends Component {
  static contextType = Application
  static defaultProps = {
    placeholder: 'Search...',
  }

  state = {
    options: [],
  }

  downshift = React.createRef()

  handleSearch = term => {
    if (term.length <= 3) { return }

    fetch(`/api/search/articles/${term}`)
      .then(response => response.json())
      .then(options => this.setState({ options }))
  }
  handleSelect = article => {
    const { router } = this.context
    if (article) {
      router.push(`/article?slug=${article.slug}`, `/article/${article.slug}`)
    }

    if (!this.clearing) {
      setTimeout(() => {
        this.clearing = true
        this.downshift.current.clearSelection()
        this.clearing = false
      }, 0)
    }
  }

  renderSearchResult = (article, index, itemProps) => (
    <li className="search-result" {...itemProps}>
      <b className="title">{article.title}</b>
      <div className="preview">{article.preview}...</div>
    </li>
  )

  render() {
    const { placeholder } = this.props
    const { options } = this.state
    const { theme } = this.context

    return (
      <Downshift
        id="search-box"
        itemToString={article => (article ? article.title : '')}
        onInputValueChange={this.handleSearch}
        onSelect={this.handleSelect}
        ref={this.downshift}
      >
        {({ getInputProps, getItemProps, getMenuProps, isOpen }) => (
          <div className="search-box" style={{ color: theme.foreground }}>
            <input {...getInputProps()} className="input" placeholder={placeholder} />
            {isOpen && <ul {...getMenuProps()} className="search-results">
              {options.length
                ? options.map((article, index) => this.renderSearchResult(
                  article, index,
                  getItemProps({ index, item: article, key: article._id }))
                )
                : <center><i>Searching...</i></center>
              }
            </ul>}
            <SearchIcon className="search icon" />
          </div>
        )}
      </Downshift>
    )
  }
}
