import cn from 'classnames'
import React, { ChangeEvent, Component, FocusEvent, KeyboardEventHandler } from 'react'
import { bound } from '~/utilities/bound'
import { noop } from '~/utilities/noop'

type EditorType = 'boolean' | 'multiline' | 'number' | 'slider' | 'text'
type Editor = HTMLInputElement | HTMLTextAreaElement
type Value = boolean | number | string

interface Props<T extends Value = string> {
	className?: string,
	forceEditMode?: boolean,
	max?: number,
	min?: number,
	onChange?: (newValue?: T, oldValue?: T) => void,
	onEditEnd?: () => void,
	onEditStart?: () => void,
	onKeyDown?: KeyboardEventHandler<Editor>,
	onKeyPress?: KeyboardEventHandler<Editor>,
	onKeyUp?: KeyboardEventHandler<Editor>,
	placeholder?: string,
	readOnly?: boolean,
	readOnlyValue?: boolean,
	requireDoubleClick?: boolean,
	step?: number,
	type?: EditorType,
	value?: T,
}

interface State<T extends Value = string> {
	editing: boolean,
	resetValue?: T,
}

const TYPES = [
	'text', 'multiline', // Strings
	'boolean', // Checkboxes
	'number', 'slider', // Numbers
]

export class Editable<T extends Value = string> extends Component<Props<T>, State<T>> {
	static displayName = 'Editable'
	static styles = import('./Editable.scss')

	static defaultProps = {
		forceEditMode: false,
		onChange: noop,
		onEditEnd: noop,
		onEditStart: noop,
		onKeyDown: noop,
		onKeyPress: noop,
		onKeyUp: noop,
		readOnly: false,
		requireDoubleClick: false,
		step: 1,
		value: '',
	}

	state = {
		editing: false,
		resetValue: this.props.value,
	}

	editor?: Editor

	get editing(): boolean {
		return this.props.forceEditMode || this.state.editing
	}

	getEditorType = (): EditorType => {
		const { value } = this.props
		const { type } = this.props

		if (type !== undefined && TYPES.includes(type)) { return type }

		if (typeof value === 'string') {
			return value.includes('\n') ? 'multiline' : 'text'
		}
		if (['boolean', 'number'].includes(typeof value)) {
			return typeof value as 'boolean' | 'number'
		}

		return 'text'
	}

	resetChanges = (): void => {
		this.props.onChange!(this.state.resetValue, this.props.value)
		this.handleToggleEditing()
	}

	createRefWithAutoFocus = (editor: Editor): void => {
		if (!editor) { return }
		this.editor = editor

		const editorType = this.getEditorType()
		if (editorType !== 'boolean' && typeof editor.focus === 'function') { editor.focus() }

		if (['boolean', 'number'].includes(editorType)) { return }
		if (this.props.forceEditMode && typeof editor.setSelectionRange === 'function') {
			editor.setSelectionRange(editor.value.length, editor.value.length)
		}
	}

	handleBooleanToggle = (): void => {
		this.props.onEditStart!()
		this.props.onChange!(!this.props.value as T, this.props.value)
		this.props.onEditEnd!()
	}

	handleChange = ({ target }: ChangeEvent<Editor>): void => {
		const { min, max } = this.props
		let value: Value = target.value

		// eslint-disable-next-line default-case
		switch (this.getEditorType()) {
			case 'slider':
			case 'number':
				value = parseFloat((value || 0) as string)
				// eslint-disable-next-line prefer-destructuring
				if (Number.isNaN(value)) { value = this.props.value! }
				value = bound(value, { max, min })
		}

		this.props.onChange!(value as T, this.state.resetValue)
	}

	handleKeys: KeyboardEventHandler<Editor> = (event): void => {
		const { key, ctrlKey, metaKey } = event
		const target = event.target as Editor

		if (this.props.onKeyDown !== noop) {
			this.props.onKeyDown!(event)
			if (event.isDefaultPrevented()) return
		}

		if (key === 'Escape') { this.resetChanges() }
		if (key === 'Enter' && (target.nodeName !== 'TEXTAREA' || ctrlKey || metaKey)) {
			this.handleToggleEditing()
		}
	}

	handleReceivingFocus = (): void => {
		if (this.props.readOnly) { return }
		if (!this.state.editing) { this.handleToggleEditing() }
	}

	handleToggleEditing = (): void => {
		if (this.props.readOnly) { return }

		const editing = !this.editing

		this.setState({ editing, resetValue: this.props.value }, () => {
			if (this.state.editing) {
				this.props.onEditStart!()
			} else {
				this.props.onEditEnd!()
			}
		})
	}

	handleSelectOnFocus = (event: FocusEvent<Editor>): void => { event.target.select() }

	renderBoolean = (): JSX.Element => (
		<input
			ref={this.createRefWithAutoFocus as () => void}
			checked={Boolean(this.props.value)}
			disabled={this.props.readOnly}
			onChange={this.handleBooleanToggle}
			type="checkbox"
		/>
	)

	renderMultiline = (): JSX.Element => {
		if (!this.editing) {
			const lines = ((this.props.value || this.props.placeholder) as string).split('\n')
			const paragraphs = lines.map((line, index) => <p key={index}>{line}</p>,
			)
			const className = ['multiline', this.props.value ? '' : 'placeholder'].join(' ').trim()
			return <div className={className} onClick={this.handleToggleEditing}>{paragraphs}</div>
		}

		return (
			<textarea
				ref={this.createRefWithAutoFocus as () => void}
				disabled={this.props.readOnly}
				onBlur={this.handleToggleEditing}
				onChange={this.handleChange}
				onFocus={this.handleSelectOnFocus}
				onKeyDown={this.handleKeys}
				onKeyPress={this.props.onKeyPress}
				onKeyUp={this.props.onKeyUp}
				placeholder={this.props.placeholder}
				rows={(this.props.value as string).split('\n').length}
				value={(this.props.value as string)}
			/>
		)
	}

	renderNumber = (): JSX.Element => {
		if (!this.editing) { return this.renderStatic() }

		return (
			<input
				ref={this.createRefWithAutoFocus as () => void}
				disabled={this.props.readOnly}
				max={this.props.max}
				min={this.props.min}
				onBlur={this.handleToggleEditing}
				onChange={this.handleChange}
				onFocus={this.handleSelectOnFocus}
				onKeyDown={this.handleKeys}
				onKeyPress={this.props.onKeyPress}
				onKeyUp={this.props.onKeyUp}
				placeholder={this.props.placeholder}
				step={this.props.step}
				type="number"
				value={this.props.value as number}
			/>
		)
	}

	renderSlider = (): JSX.Element => (
		<input
			ref={this.createRefWithAutoFocus as () => void}
			disabled={this.props.readOnly}
			max={this.props.max}
			min={this.props.min}
			onBlur={this.handleToggleEditing}
			onChange={this.handleChange}
			onKeyDown={this.props.onKeyDown}
			onKeyPress={this.props.onKeyPress}
			onKeyUp={this.props.onKeyUp}
			step={this.props.step}
			type="range"
			value={this.props.value as number}
		/>
	)

	renderText = (): JSX.Element => {
		if (!this.editing) { return this.renderStatic() }

		return (
			<input
				ref={this.createRefWithAutoFocus as () => void}
				disabled={this.props.readOnly}
				onBlur={this.handleToggleEditing}
				onChange={this.handleChange}
				onFocus={this.handleSelectOnFocus}
				onKeyDown={this.handleKeys}
				onKeyPress={this.props.onKeyPress}
				onKeyUp={this.props.onKeyUp}
				placeholder={this.props.placeholder}
				type="text"
				value={this.props.value as string}
			/>
		)
	}

	renderStatic = (): JSX.Element => {
		const {
			placeholder, readOnlyValue, requireDoubleClick, value,
		} = this.props
		const showPlaceholder = placeholder && !value
		const displayValue = readOnlyValue !== undefined ? readOnlyValue : value
		const className = showPlaceholder ? 'placeholder' : ''

		return (
			<span
				className={className}
				onClick={requireDoubleClick ? undefined : this.handleToggleEditing}
			>
				{showPlaceholder ? placeholder : displayValue}
			</span>
		)
	}

	renderEditor = (): JSX.Element => {
		switch (this.getEditorType()) {
			case 'boolean':
				return this.renderBoolean()
			case 'slider':
				return this.renderSlider()
			case 'multiline':
				return this.renderMultiline()
			case 'number':
				return this.renderNumber()
			default:
				return this.renderText()
		}
	}

	render = (): JSX.Element => {
		const { className, readOnly, requireDoubleClick } = this.props

		const classes = cn('editable', className, {
			editing: this.editing,
			readonly: readOnly,
		})

		const props: React.HTMLAttributes<HTMLDivElement> = {}
		if (!readOnly && !this.editing) {
			if (requireDoubleClick) {
				props.onDoubleClick = this.handleToggleEditing
			} else {
				props.tabIndex = 0
				props.onFocus = this.handleReceivingFocus
			}
		}

		return (
			<div className={classes} {...props}>
				{this.renderEditor()}
			</div>
		)
	}
}
