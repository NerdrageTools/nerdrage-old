import React from 'react'
import { OptionProps, SearchBox } from '~/components/SearchBox/SearchBox'
import { Application } from '~/contexts/Application'
import { IArticleSearchResult } from '~/server/models'
import { objectMatch } from '~/utilities/objectMatch'

export class ArticleSearchBox extends SearchBox<IArticleSearchResult> {
	static contextType = Application
	readonly clearOnSelect: boolean = true
	readonly placeholder: string = 'Search... (Ctrl+Shift+F)'
	readonly typeName: string = 'article'
	readonly url: string = '/api/search/articles/:searchTerm'

	componentDidMount = (): void => document.addEventListener('keydown', this.#handleHotKey)
	componentWillUnmount = (): void => document.removeEventListener('keydown', this.#handleHotKey)

	#handleHotKey = (event: KeyboardEvent): void => {
		if (objectMatch(event, { ctrlKey: true, key: 'F', shiftKey: true })) {
			this.inputBox.current!.focus()
		}
	}

	getValue = (article: IArticleSearchResult): string => article.id
	renderOption = (option: IArticleSearchResult, _: number, itemProps: OptionProps): JSX.Element => (
		<li key={option.slug} className="search-result" {...itemProps}>
			<b className="title">{option.title}</b>
			<div className="preview">
				{option.preview.map((preview, key) => (
					// eslint-disable-next-line react/no-danger
					<span key={key} dangerouslySetInnerHTML={{ __html: preview }} />
				))}
			</div>
		</li>
	)
}
