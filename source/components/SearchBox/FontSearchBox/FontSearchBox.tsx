import React from 'react'
import { SearchBox } from '~/components/SearchBox/SearchBox'
import { noop } from '~/utilities/noop'

export class FontSearchBox extends React.Component {
	static styles = import('./FontSearchBox.scss')

	renderOption = (font, _, itemProps): JSX.Element => (
		<li key={font.family} className="search-result" {...itemProps}>
			<b className="family">{font.family}</b>{' '} | {font.category}
		</li>
	)

	renderValue = fontOption => fontOption.family

	render = (): JSX.Element => {
		const { onSelect = noop, ...props } = this.props

		return (
			<SearchBox
				className="font"
				clearOnSelect={false}
				limit={5}
				onSelect={onSelect}
				placeholder="Search Fonts..."
				renderOption={this.renderOption}
				url="/api/search/fonts/:searchTerm"
				valueGetter={this.renderValue}
				{...props}
			/>
		)
	}
}
