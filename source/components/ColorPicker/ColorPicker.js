import React, { useEffect, useState, useRef } from 'react'
import { CustomPicker, GithubPicker } from 'react-color'
import './ColorPicker.scss'
import noop from '@/utilities/noop'

const defaultColors = [
  '#000000',
  '#FFFFFF',
  '#B80000',
  '#DB3E00',
  '#FCCB00',
  '#008B02',
  '#006B76',
  '#1273DE',
  '#004DCF',
  '#5300EB',
]

function ColorPicker({
  colors = defaultColors,
  hex = defaultColors[0],
  onChange = noop,
  popover = true,
  triangle = 'top-right',
  width = 'auto',
}) {
  const wrapper = useRef()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (!wrapper.current.contains(target)) setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [true])

  return (
    <div className="color-picker input" ref={wrapper}>
      <button
        className="swatch"
        onClick={() => setOpen(!open)}
        style={{ background: hex }}
      />
      {open && <GithubPicker {...{ colors, hex, onChange, popover, triangle, width }} />}
    </div>
  )
}

export default CustomPicker(ColorPicker)
