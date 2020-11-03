import React from 'react'
import { noop } from '~/utilities/noop'

interface LoadEvent {
	document: Document | null,
	window: Window | null,
}

interface Props {
	bodyClasses?: string[],
	className?: string,
	css?: string,
	onLoad?: (event: LoadEvent) => void,
	onReady?: (event: LoadEvent) => void,
	onUnload?: (event: LoadEvent) => void,
	queryString?: Record<string, string>,
	src?: string,
	title?: string,
}

export class IFrame extends React.Component<Props> {
	static defaultProps = {
		bodyClasses: [],
		onLoad: noop,
		onReady: noop,
		onUnload: noop,
		title: 'IFrame',
	}

	#el = React.createRef<HTMLIFrameElement>()

	componentWillUnmount = (): void => {
		this.props.onUnload!({
			document: this.#el.current!.contentDocument,
			window: this.#el.current!.contentWindow,
		})
	}

	handleOnLoad = (): void => {
		const document = this.#el.current!.contentDocument!
		const window = this.#el.current!.contentWindow!

		this.props.onLoad!({ document, window })

		if (window.location.href === 'about:blank') {
			setTimeout(this.handleOnLoad, 50)
		} else if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', () => {
				this.props.onReady!({ document, window })
			})
		} else {
			this.props.onReady!({ document, window })
		}
	}

	handleOnReady = (): void => {
		const document = this.#el.current!.contentDocument
		const { bodyClasses, css } = this.props

		if (!document || !document.body || !document.head) { return }

		const classNames = bodyClasses!.filter(Boolean)
		classNames.forEach(cn => document.body.classList.add(cn))

		if (css) {
			let styleTag = document.head.querySelector('style#injected')
			if (!styleTag) {
				styleTag = document.createElement('style')
				styleTag.id = 'injected'
				document.head.appendChild(styleTag)
			}

			styleTag.innerHTML = css
		}
	}

	render = (): JSX.Element => {
		const { className, queryString = {}, src = '', title } = this.props
		const params = Object.entries(queryString)
			.filter(([, value]) => value !== undefined)
			.reduce((object, [key, value]) => ({ ...object, [key]: value }), {})
		const qs = (new URLSearchParams(params)).toString()
		const url = src.match(/[?]/) ? `${src}&${qs}` : `${src}?${qs}`

		return <iframe ref={this.#el} onLoad={this.handleOnLoad} src={url} {...{ className, title }} />
	}
}
