import cn from 'classnames'
import Downshift, { DownshiftProps } from 'downshift'
import debounce from 'lodash.debounce'
import React, { ChangeEvent, Component } from 'react'
import { Application } from '~/contexts/Application'
import LoadingIcon from '~/icons/loading.svg'
import SearchIcon from '~/icons/search.svg'
import { noop } from '~/utilities/noop'

interface Option {
	id: string,
	preview: string,
	title: string,
}

interface Hotkey {
	ctrlKey: boolean,
	key: string,
	shiftKey: boolean,
}

export type OptionProps = {
	'aria-selected': boolean,
	id: string,
	role: 'option',
}

interface Props<TOption = Option> extends Omit<DownshiftProps<TOption>, 'onSelect'> {
	className?: string,
	initialValue?: string,
	limit?: number,
	onHotKey?: (name: string, event: KeyboardEvent, searchBox: SearchBox<TOption>) => void,
	onSelect?: (option: TOption) => void,
	placeholder?: string,
	selectOnFocus?: boolean,
}

interface State<TOption> {
	message: string | null,
	options: TOption[],
	searchTerm?: string,
	searching: boolean,
}

export abstract class SearchBox<TOption = Option>
	extends Component<Props<TOption>, State<TOption>> {
	static styles = import('./SearchBox.scss')
	static contextType = Application
	static defaultProps: Props<Option> = {
		className: '',
		initialValue: '',
		limit: 10,
		onHotKey: noop,
		onSelect: noop,
		placeholder: 'Search...',
		selectOnFocus: true,
	}
	static displayName = 'SearchBox'

	readonly clearOnSelect: boolean = false
	readonly placeholder: string = 'Search...'
	readonly typeName: string = 'option'
	readonly abstract url: string // eslint-disable-line react/sort-comp

	state: State<TOption> = {
		message: null,
		options: [],
		searching: false,
		searchTerm: this.props.initialValue ?? '',
	}

	#downshift = React.createRef<Downshift>()
	#escapeKey: boolean = false
	inputBox = React.createRef<HTMLInputElement>()

	#search = debounce(async (searchTerm = '') => {
		const { limit } = this.props

		if (!this.url || !searchTerm || searchTerm.length < 3) {
			this.setState({
				message: 'Enter at least 3 characters...',
				options: [],
				searching: false,
			})
			return undefined
		}

		const searchUrl = this.url.replace(':searchTerm', searchTerm)
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
	}, 500, { leading: true, trailing: true })

	handleFocus = (): void => {
		if (this.props.selectOnFocus) { this.inputBox.current!.select() }
	}

	handleKeyDown = (event: React.KeyboardEvent): void => {
		if (event.key === 'Escape') {
			this.setState({ searching: false, searchTerm: this.props.initialValue })
			this.inputBox.current!.blur()
			this.#escapeKey = true
			// @ts-expect-error - downshift has no ts definitions
			event.nativeEvent.preventDownshiftDefault = true // eslint-disable-line no-param-reassign
		}
	}
	handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
		const { value: searchTerm = '' } = event.target

		if (this.#escapeKey) {
			this.#escapeKey = false
			return
		}
		this.setState({ message: 'Searching...', searching: Boolean(searchTerm), searchTerm })

		if (searchTerm) {
			this.#search(searchTerm)
		}
	}
	handleSelect = (selectedItem: TOption | null): void => {
		this.props.onSelect!(selectedItem as TOption)
		this.inputBox.current!.blur()

		if (this.clearOnSelect) {
			this.setState({ searching: false, searchTerm: '' })
		} else {
			this.setState({
				searching: false,
				searchTerm: this.getValue!(selectedItem as TOption),
			})
		}
	}

	abstract getValue: (option: TOption) => string
	abstract renderOption: (option: TOption, index: number, itemProps: OptionProps) => JSX.Element

	render = (): JSX.Element => {
		const { message, options, searching, searchTerm } = this.state
		const { theme } = this.context
		const OverlayIcon = searching ? LoadingIcon : SearchIcon
		const inputHasFocus = Boolean(this.inputBox?.current?.matches(':focus'))
		const className = cn(this.typeName, 'search-box', this.props.className)

		return (
			<Downshift<TOption>
				ref={this.#downshift} id="search-box"
				{...this.props}
				isOpen={Boolean(searchTerm) && inputHasFocus}
				itemToString={option => ((option as unknown as Option)?.title ?? '')}
				onSelect={this.handleSelect}
			>
				{({ getInputProps, getItemProps, getMenuProps, isOpen }) => (
					<div
						className={cn(className, { closed: !isOpen, open: isOpen })}
						style={{ color: theme.normalText }}
					>
						<input
							{...getInputProps({ onKeyDown: this.handleKeyDown })}
							ref={this.inputBox} className="input"
							onChange={this.handleSearch}
							onFocus={this.handleFocus}
							placeholder={this.placeholder}
							value={searchTerm}
						/>
						{(searching || !options.length)
							? isOpen && <div className="search-results message">{message}</div>
							: isOpen && (
								<ul {...getMenuProps()} className="search-results list">
									{options.map((option, index) => this.renderOption(
										option, index,
										getItemProps({ index, item: option, key: this.getValue(option) })),
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
