import React, { Component } from 'react'
import SearchBox from '~/components/SearchBox/SearchBox'
import Application from '~/contexts/Application'

export default class ArticleSearchBox extends Component {
	static contextType = Application

	handleHotKey = (_, __, ref) => {
		ref.inputBox.current.focus()
	}
	handleSelect = option => {
		const { router } = this.context

		if (option) {
			router.push(`/article?slug=${option.slug}`, `/article/${option.slug}`)
		}
	}

	renderOption = (option, _, itemProps) => (
		<li key={option.slug} className="search-result" {...itemProps}>
			<b className="title">{option.title}</b>
			<div className="preview">{option.preview.map((preview, key) => (
				// eslint-disable-next-line react/no-danger
				<span key={key} dangerouslySetInnerHTML={{ __html: preview }} />
			))}</div>
		</li>
	)

	render = () => (
		<SearchBox
			className="article"
			clearOnSelect
			hotkeys={{
				focus: { ctrlKey: true, key: 'F', shiftKey: true },
			}}
			onHotKey={this.handleHotKey}
			onSelect={this.handleSelect}
			placeholder="Search... (Ctrl+Shift+F)"
			renderOption={this.renderOption}
			url="/api/search/articles/:searchTerm"
		/>
	)
}
