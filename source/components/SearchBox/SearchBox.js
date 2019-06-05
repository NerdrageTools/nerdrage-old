import Downshift from 'downshift'
import React, { Component } from 'react'
import Application from '@/contexts/Application'
import LoadingIcon from '@/icons/loading.svg'
import SearchIcon from '@/icons/search.svg'
import debounce from '@/utilities/debounce'
import noop from '@/utilities/noop'
import objectMatch from '@/utilities/objectMatch'
import './SearchBox.scss'

export default class SearchBox extends Component {
  static contextType = Application
  static defaultProps = {
    className: '',
    clearOnSelect: false,
    hotkeys: {},
    initialValue: '',
    limit: 10,
    onHotKey: noop,
    onSelect: noop,
    placeholder: 'Search...',
    renderOption: null,
    selectOnFocus: true,
    url: '',
    valueGetter: option => option,
  }
  static displayName = 'SearchBox'

  state = {
    message: null,
    options: [],
    searchTerm: this.props.initialValue,
  }

  downshift = React.createRef()
  inputBox = React.createRef()
  debouncedSearch = debounce(async (searchTerm = '') => {
    const { limit, url } = this.props

    if (!url || !searchTerm || searchTerm.length < 3) {
      this.setState({
        message: 'Enter at least 3 characters...',
        options: [],
        searching: false,
      })
      return undefined
    }

    const searchUrl = url.replace(':searchTerm', searchTerm)
    const queryString = `limit=${limit}`

    const response = await fetch(`${searchUrl}?${queryString}`)
    const json = await response.json()

    if (response.status === 200 && json.length) {
      return this.setState({
        message: '',
        options: json,
        searching: false,
      })
    }

    return this.setState({
      message: json.message || 'No results found...',
      options: [],
      searching: false,
    })
  }, 500)

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleHotKeys)
  }
  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleHotKeys)
  }

  handleFocus = () => {
    if (this.props.selectOnFocus) {
      this.inputBox.current.select()
    }
  }
  handleHotKeys = event => {
    Object.entries(this.props.hotkeys).forEach(([name, keyCombo]) => {
      if (objectMatch(event, keyCombo)) {
        this.props.onHotKey(name, event, this)
      }
    })
  }
  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.setState({ searching: false, searchTerm: this.props.initialValue })
      this.inputBox.current.blur()
      this.escapeKey = true
      // eslint-disable-next-line no-param-reassign
      event.nativeEvent.preventDownshiftDefault = true
    }
  }
  handleSearch = event => {
    const { value: searchTerm = '' } = event.target

    if (this.escapeKey) {
      this.escapeKey = false
      return
    }
    this.setState({ message: 'Searching...', searching: Boolean(searchTerm), searchTerm })

    if (searchTerm) {
      this.debouncedSearch(searchTerm)
    }
  }
  handleSelect = option => {
    const { clearOnSelect, onSelect, valueGetter } = this.props

    onSelect(option)
    this.inputBox.current.blur()

    if (clearOnSelect) {
      this.setState({ searching: false, searchTerm: '' })
    } else {
      this.setState({ searching: false, searchTerm: valueGetter(option) })
    }
  }

  renderOption = (option, index, itemProps) => (
    <li key={index} className="search-result" {...itemProps}>
      <b className="title">{option.title}</b>
      <div className="preview">{option.preview}...</div>
    </li>
  )
  render = () => {
    const { className, placeholder, ...props } = this.props
    const { message, options, searching, searchTerm } = this.state
    const { theme } = this.context
    const renderOption = this.props.renderOption || this.renderOption
    const OverlayIcon = searching ? LoadingIcon : SearchIcon
    const inputHasFocus = this.inputBox.current && this.inputBox.current.matches(':focus')

    return (
      <Downshift
        id="search-box" ref={this.downshift}
        {...props}
        itemToString={article => (article ? article.title : '')}
        isOpen={Boolean(searchTerm) && inputHasFocus}
        onSelect={this.handleSelect}
      >{({ getInputProps, getItemProps, getMenuProps, isOpen }) => (
        <div
          className={`${className} search-box ${isOpen ? 'open' : 'closed'}`}
          style={{ color: theme.normalText }}
        >
          <input
            {...getInputProps({ onKeyDown: this.handleKeyDown })}
            className="input" ref={this.inputBox}
            onChange={this.handleSearch}
            onFocus={this.handleFocus}
            placeholder={placeholder}
            value={searchTerm}
          />
          {(searching || !options.length)
            ? isOpen && <div className="search-results message">{message}</div>
            : isOpen && (
              <ul {...getMenuProps()} className="search-results list">
                {options.map((option, index) => renderOption(
                  option, index,
                  getItemProps({ index, item: option, key: option._id }))
                )}
              </ul>
            )}
          <OverlayIcon className="search icon" />
        </div>
      )}
      </Downshift>
    )
  }
}
