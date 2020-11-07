import React from 'react'
import { OptionProps, SearchBox } from '~/components/SearchBox/SearchBox'
import { IFontSearchResult } from '~/server/schema/IFont'

export class FontSearchBox extends SearchBox<IFontSearchResult> {
	static displayName = 'SearchBox<Font>'
	readonly placeholder: string = 'Search Fonts...'
	readonly typeName: string = 'font'
	readonly url: string = '/api/search/fonts/:searchTerm'

	getValue = (font: IFontSearchResult): string => font.family
	renderOption = (font: IFontSearchResult, _: number, itemProps: OptionProps): JSX.Element => (
		<li key={font.family} className="search-result" {...itemProps}>
			<b className="family">{font.family}</b>{` | ${font.category}`}
		</li>
	)
}
