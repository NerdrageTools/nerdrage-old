import React, { useEffect, useMemo, useRef } from 'react'
import noop from '@/utilities/noop'

export default function IFrame({
  bodyClasses = [],
  className = '',
  css = '',
  onLoad = noop,
  onUnload = noop,
  queryString = {},
  src = '',
  title = 'IFrame',
  windowRef = noop,
}) {
  const frameEl = useRef()
  const styleTag = useMemo(() => {
    if (typeof document !== 'undefined') {
      return document.createElement('style')
    }

    return {}
  }, [])

  const handleOnLoad = useEffect(() => {
    const document = frameEl.current.contentDocument
    const window = frameEl.current.contentWindow
    if (document.head) {
      document.head.appendChild(styleTag)
    }

    onLoad({ document, window })
    windowRef(window)
    return () => onUnload({ document, window })
  }, [])

  useEffect(() => {
    const bodyTag = frameEl.current.contentDocument.body
    if (!bodyTag) { return noop }
    const classNames = bodyClasses.filter(Boolean)
    classNames.forEach(cn => bodyTag.classList.add(cn))

    return () => classNames.forEach(cn => bodyTag.classList.remove(cn))
  })
  useEffect(() => { styleTag.innerText = css }, [css])

  const url = useMemo(() => {
    const params = Object.entries(queryString)
      .filter(([, value]) => value !== undefined)
      .reduce((object, [key, value]) => ({ ...object, [key]: value }), {})
    const qs = (new URLSearchParams(params)).toString()

    return src.match(/[?]/) ? `${src}&${qs}` : `${src}?${qs}`
  }, [src, queryString])

  return (
    <iframe
      onLoad={handleOnLoad}
      ref={frameEl}
      src={url}
      {...{ className, title }}
    />
  )
}
