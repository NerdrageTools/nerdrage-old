import React, { Component } from 'react'
import AceEditor from 'react-ace'
import { noop } from '~/utilities/noop'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/theme-github'

interface Props {
	value: string,
	onChange: (html: string) => void,
}
export class HtmlEditor extends Component<Props> {
	static defaultProps = {
		html: '',
		onChange: noop,
	}

	render = () => (
		<AceEditor
			onChange={this.props.onChange}
			value={this.props.value}
			{...{
				editorProps: { $blockScrolling: Infinity },
				height: '100%',
				mode: 'html',
				name: 'html',
				scrollMargin: [5, 0, 5, 0],
				setOptions: {
					displayIndentGuides: true,
					enableMultiselect: true,
					highlightActiveLine: true,
					highlightSelectedWord: true,
					showInvisibles: false,
					showPrintMargin: false,
					useWorker: false,
					wrap: true,
				},
				showGutter: true,
				tabSize: 2,
				theme: 'github',
				width: '100%',
			}}
		/>
	)
}
