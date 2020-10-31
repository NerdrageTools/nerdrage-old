import React from 'react'
import { SearchBox } from '@/components/SearchBox'
import { noop } from '@/utilities/noop'
import './FontSearchBox.scss'

const renderOption = (font, index, itemProps) => (
	<li key={font.family} className="search-result" {...itemProps}>
		<b className="family">{font.family}</b>
		{' '}
		|
		{font.category}
	</li>
)

const valueGetter = fontOption => fontOption.family

export function FontSearchBox({ onSelect = noop, ...props }) {
	return (
		<SearchBox
			className="font"
			clearOnSelect={false}
			limit={5}
			onSelect={onSelect}
			placeholder="Search Fonts..."
			renderOption={renderOption}
			url="/api/search/fonts/:searchTerm"
			valueGetter={valueGetter}
			{...props}
		/>
	)
}
