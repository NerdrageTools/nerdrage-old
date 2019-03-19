import Downshift from 'downshift'
import React, { Component } from 'react'
import Application from '@/contexts/Application'
import SearchIcon from '@/icons/search.svg'
import './SearchBox.scss'

export default class SearchBox extends Component {
  static contextType = Application
  static defaultProps = {
    placeholder: 'Search... (Ctrl+Shift+F)',
  }
  static displayName = 'SearchBox'

  state = {
    message: null,
    options: [],
  }

  downshift = React.createRef()
  inputBox = React.createRef()

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleHotKeys)
  }
  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleHotKeys)
  }

  handleHotKeys = ({ key, ctrlKey, shiftKey }) => {
    if (key === 'F' && ctrlKey && shiftKey) {
      this.inputBox.current.focus()
    }
  }
  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.inputBox.current.blur()
    }
  }
  handleSearch = async term => {
    if (term.length <= 3) return undefined

    const response = await fetch(`/api/search/articles/${term}`)
    const json = await response.json()

    if (response.status === 200) {
      return this.setState({ options: json })
    }

    return this.setState(json)
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

  render = () => {
    const { placeholder } = this.props
    const { message, options } = this.state
    const { theme } = this.context

    return (
      <Downshift
        id="search-box" ref={this.downshift}
        itemToString={article => (article ? article.title : '')}
        onInputValueChange={this.handleSearch}
        onSelect={this.handleSelect}
      >{({ getInputProps, getItemProps, getMenuProps, isOpen }) => (
        <div className="search-box" style={{ color: theme.foreground }}>
          <input
            {...getInputProps()}
            className="input" ref={this.inputBox}
            onKeyDown={this.handleKeyDown}
            placeholder={placeholder}
          />
          {isOpen && (
            <ul {...getMenuProps()} className="search-results">
              {options.length
                ? options.map((article, index) => this.renderSearchResult(
                  article, index,
                  getItemProps({ index, item: article, key: article._id }))
                )
                : <center><i>{message || 'Searching...'}</i></center>
              }
            </ul>
          )}
          <SearchIcon className="search icon" />
        </div>
      )}
      </Downshift>
    )
  }
}
