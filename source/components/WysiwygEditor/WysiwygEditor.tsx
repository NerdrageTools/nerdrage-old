import React, { Component } from 'react'
import * as jodit from 'jodit'
import { noop } from '~/utilities/noop'
import 'jodit/build/jodit.min.css'

interface Props {
	onChange?: (html: string) => void,
	readOnly: boolean,
	value?: string,
}

export class WysiwygEditor extends Component<Props> {
	static styles = import('./WysiwygEditor.scss')
	static defaultProps: Props = {
		onChange: noop,
		readOnly: false,
		value: '',
	}
	static get config(): any {
		return {
			allowResizeX: false,
			allowResizeY: false,
			autofocus: true,
			beautifyHTML: false,
			buttons: [
				'paragraph,italic,strikethrough',
				'brush,copyformat',
				'align,outdent,indent,ul,ol,image,table',
				'link,symbol,find',
			].join(',|,'),
			disablePlugins: [
				'cleanhtml,font,fullsize,hr,imageprocessor,media,placeholder,resizer,resizehandler,size',
				'source,sticky,xpath',
			].join(','),
			spellcheck: false,
		}
	}

	#editor!: jodit.IJodit
	#el = React.createRef<HTMLTextAreaElement>()

	componentDidMount = (): void => {
		this.#editor = jodit.Jodit.make(this.#el.current!, WysiwygEditor.config)
		this.#editor.setEditorValue(this.props.value)
		this.#editor.events.on('change', this.handleChange)
	}
	componentDidUpdate = (): void => {
		this.#editor.setEditorValue(this.props.value)
	}
	componentWillUnmount = (): void => {
		this.#editor.destruct()
	}

	handleChange = (html: string): void => {
		this.props.onChange!(html)
	}

	render = (): JSX.Element => (
		<div className="wysiwyg-editor">
			<textarea ref={this.#el} />
		</div>
	)
}
