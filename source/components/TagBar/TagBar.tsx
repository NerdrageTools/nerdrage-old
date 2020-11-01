import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import TagsInput from 'react-tagsinput'
import { Tag } from '~/components/Tag/Tag'
import { noop } from '~/utilities/noop'

const exclude = (list, exclusions) => list.filter(el => !exclusions.includes(el))
const areEqual = (array1, array2) => array1.every((el, ix) => el === array2[ix])

export class TagBar extends Component {
	static styles = import('./TagBar.scss')
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
			className: '',
			classNameRemove: 'remove',
		},
	}

	handleChange = updated => {
		const {
			banned, onChange, sort, tags,
		} = this.props
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
			? <input onChange={this.handleTextInput(onChange)} type="text" {...props} />
			: null
	)
	renderLayout = (tags, input) => (
		<Scrollbars autoHide className="scrollbars" universal>
			{tags}
			{input}
		</Scrollbars>
	)
	renderTag = ({ className, key, tag }) => (
		<Tag
			key={key}
			asLink={this.props.asLinks}
			className={className}
			onRemove={this.handleTagRemove}
			removable={!this.props.readOnly}
			tag={tag}
		/>
	)
	render() {
		const {
			className, inputSettings, readOnly, tags, tagSettings,
		} = this.props
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
				renderInput={this.renderInput}
				renderLayout={this.renderLayout}
				renderTag={this.renderTag}
				tagProps={tagSettings}
				value={tags}
			/>
		)
	}
}
