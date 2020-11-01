import React, { Component } from 'react'
import { Editor as TinyMCE } from '~/components/WysiwygEditor/TinyMCE'

export class WysiwygEditor extends Component {
	static styles = Promise.all([
		import('./ArticleEditor.scss'),
		import('./WysiwygEditor.scss'),
	])
	static defaultProps = {
		onChange: () => {},
	}

	previousValue = this.props.html
	componentWillReceiveProps(props) { this.previousValue = props.html }

	handleChangeEvent = (_, editor) => {
		const html = editor.getContent()
		if (html !== this.previousValue) {
			this.props.onChange(html)
			this.previousValue = html
		}
	}

	render = () => {
		const { html, onChange, ...props } = this.props

		return (
			<div className="wysiwyg-editor">
				<div className="menubar" />
				<TinyMCE
					{...props}
					initialValue={html}
					inline
					onCut={this.handleChangeEvent}
					onKeyUp={this.handleChangeEvent}
					onNodeChange={this.handleChangeEvent}
					onPaste={this.handleChangeEvent}
				/>
			</div>
		)
	}
}
