import React, { useEffect, useMemo, useRef } from 'react'
import { noop } from '~/utilities/noop'

const applyProps = ({ bodyClasses, css, document }) => {
	if (!document || !document.body || !document.head) {
		return noop
	}

	const bodyTag = document.body
	const classNames = bodyClasses.filter(Boolean)
	classNames.forEach(cn => bodyTag.classList.add(cn))

	const headTag = document.head
	let styleTag = headTag.querySelector('style#injected')
	if (!styleTag) {
		styleTag = document.createElement('style')
		styleTag.id = 'injected'
		headTag.appendChild(styleTag)
	}

	styleTag.innerHTML = css

	return () => classNames.forEach(cn => bodyTag.classList.remove(cn))
}

export function IFrame({
	bodyClasses = [],
	className = '',
	css = '',
	onLoad = noop,
	onReady = noop,
	onUnload = noop,
	queryString = {},
	src = '',
	title = 'IFrame',
}) {
	const frameEl = useRef()

	const handleOnReady = useMemo(() => ({ document, window }) => {
		applyProps({ bodyClasses, css, document })
		onReady({ document, window })
	}, [bodyClasses, css, onReady])

	const handleOnLoad = useEffect(function _handleOnLoad() {
		const document = frameEl.current.contentDocument // eslint-disable-line no-shadow
		const window = frameEl.current.contentWindow

		onLoad({ document, window })

		if (window.location.href === 'about:blank') {
			setTimeout(_handleOnLoad, 50)
		} else if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', () => {
				handleOnReady({ document, window })
			})
		} else {
			handleOnReady({ document, window })
		}

		return () => onUnload({ document, window })
	}, [onReady, onUnload])

	const url = useMemo(() => {
		const params = Object.entries(queryString)
			.filter(([, value]) => value !== undefined)
			.reduce((object, [key, value]) => ({ ...object, [key]: value }), {})
		const qs = (new URLSearchParams(params)).toString()

		return src.match(/[?]/) ? `${src}&${qs}` : `${src}?${qs}`
	}, [src, queryString])

	return (
		<iframe
			ref={frameEl}
			onLoad={handleOnLoad}
			src={url}
			{...{ className, title }}
		/>
	)
}
