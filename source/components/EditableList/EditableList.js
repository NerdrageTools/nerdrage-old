import React, { Component } from 'react'
import noop from '@/utilities/noop'
import './EditableList.scss'

export default class EditableList extends Component {
  static defaultProps = {
    className: '',
    defaultValue: '',
    onChange: noop,
    options: [],
  }

  state = {
    selected: this.props.defaultValue,
  }

  handleChange = ({ target }) => {
    this.props.onChange(target.value)
  }

  render = () => {
    const { className, options } = this.props
    const { selected } = this.state

    return (
      <select
        className={`editable-list ${className}`} defaultValue={selected}
        onChange={this.handleChange}
      >
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    )
  }
}
