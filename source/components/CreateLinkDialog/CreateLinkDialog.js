import React, { useEffect, useRef, useState } from 'react'
import Dialog from '@/components/Dialog'
import noop from '@/utilities/noop'
import { slugify } from '@/utilities/slugs'
import './CreateLinkDialog.scss'

const getTemplates = async type => {
  const response = await fetch(`/api/templates/${type.toLowerCase()}`)
  if (response.status === 200) return response.json()

  return []
}

export default function CreateLinkDialog({
  defaultSlug = '',
  defaultText = '',
  onCancel = noop,
  onOk = noop,
  slugLabel = 'Slug',
  templateType = null,
  textLabel = 'Text',
  title = 'Create Link',
}) {
  const [text, setText] = useState(defaultText)
  const [slug, setSlug] = useState(defaultSlug)
  const [auto, setAuto] = useState(true)
  const [templates, setTemplates] = useState([])
  const [templateSlug, setTemplate] = useState(undefined)
  const slugInput = useRef(null)
  const textInput = useRef(null)
  const templateInput = useRef(null)

  useEffect(() => {
    if (templateType) getTemplates(templateType).then(setTemplates)
  }, [templateType])
  useEffect(() => {
    textInput.current.focus()
    textInput.current.select()
  }, [true])

  const handleKeyDown = ({ key }) => {
    switch (key) {
      case 'Escape':
        return onCancel()
      case 'Enter':
        return onOk({ slug, templateSlug, text })
      default:
        return undefined
    }
  }
  const handleSlug = ({ target }) => {
    if (auto) setAuto(false)
    setSlug(slugify(target.value))
  }
  const handleText = ({ target }) => {
    setText(target.value)
    if (auto) setSlug(slugify(target.value))
  }
  const handleTemplate = ({ target }) => setTemplate(target.value)

  return (
    <Dialog
      className="create-link"
      modal
      onCancel={onCancel}
      onKeyDown={handleKeyDown}
      onOk={() => onOk({ slug, templateSlug, text })}
      title={title}
    >
      <div className="input-wrapper">
        <label>{textLabel}</label>
        <input value={text} onChange={handleText} ref={textInput} type="text" />
      </div>
      <div className="input-wrapper">
        <label>{slugLabel}</label>
        <input value={slug} onChange={handleSlug} ref={slugInput} type="text" />
      </div>
      {templateType && (
        <div className="input-wrapper">
          <label>Template</label>
          <select onChange={handleTemplate} ref={templateInput} value={templateSlug}>
            <option key="none" value="">None</option>
            {/* eslint-disable-next-line no-shadow */}
            {templates.map(({ slug, title }) => <option key={slug} value={slug}>{title}</option>)}
          </select>
        </div>
      )}
    </Dialog>
  )
}
