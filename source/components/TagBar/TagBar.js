import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import TagsInput from 'react-tagsinput'
import Tag from '@/components/Tag'
import noop from '@/utilities/noop'
import './TagBar.scss'

const exclude = (list, exclusions) => list.filter(el => !exclusions.includes(el))
const areEqual = (array1, array2) => array1.every((el, ix) => el === array2[ix])

export default class TagBar extends Component {
  static defaultProps = {
    asLinks: false,
    banned: [],
    className: '',
    onChange: noop,
    onRemove: noop,
    readOnly: false,
    sort: true,
    tags: [],
    validationRegex: /^[a-z0-9-]*$/,

    // eslint-disable-next-line sort-keys
    inputSettings: {
      className: 'tag-bar-input',
      placeholder: 'add tag',
    },
    tagSettings: {
      className: 'tag',
      classNameRemove: 'remove',
    },
  }

  handleChange = updated => {
    const { banned, onChange, sort, tags } = this.props
    const cleaned = exclude(updated, banned)

    if (sort) cleaned.sort()
    if (!areEqual(cleaned, tags)) onChange(cleaned)
  }
  handleTagRemove = removed => {
    const { tags, onChange } = this.props
    onChange(tags.filter(tag => tag !== removed))
  }
  handleTextInput = next => event => {
    const { value } = event.target
    if (!value.match(this.props.validationRegex)) {
      event.preventDefault()
    } else {
      next(event)
    }
  }

  renderInput = ({ addTag, onChange, ...props }) => (
    !this.props.readOnly
      ? <input type="text" onChange={this.handleTextInput(onChange)} {...props} />
      : null
  )
  renderLayout = (tags, input) => <Scrollbars universal>{input}{tags}</Scrollbars>
  renderTag = ({ className, key, tag }) => (
    <Tag
      asLink={this.props.asLinks}
      className={`icon-tag ${className}`.trim()}
      key={key}
      onRemove={this.handleTagRemove}
      removable={!this.props.readOnly}
      tag={tag}
    />
  )
  render() {
    const { className, inputSettings, readOnly, tags, tagSettings } = this.props
    const classNames = [
      'tag-bar',
      className,
      readOnly ? 'readOnly' : '',
    ].filter(Boolean).join(' ')

    return (
      <TagsInput
        className={classNames}
        inputProps={inputSettings}
        onChange={this.handleChange}
        onlyUnique
        readOnly={readOnly}
        renderLayout={this.renderLayout}
        renderInput={this.renderInput}
        renderTag={this.renderTag}
        tagProps={tagSettings}
        value={tags}
      />
    )
  }
}
