import React from 'react'
import Draggable from 'react-draggable'
import noop from '@/utilities/noop'
import './Dialog.scss'

export default function Dialog({
  buttons = null,
  children = [],
  className = '',
  modal = false,
  onCancel = noop,
  onOk = noop,
  title = 'Dialog',
}) {
  return (
    <div className={`dialog-wrapper ${modal ? 'modal' : ''}`}>
      <Draggable handle=".dialog > .title">
        <div className={`dialog ${className}`}>
          <div className="title">{title}</div>
          <div className="body">{children}</div>
          <div className="buttons">
            {buttons || <>
              <button className="ok button safe" onClick={onOk}>Ok</button>
              <button className="cancel button link" onClick={onCancel}>Cancel</button>
            </>}
          </div>
        </div>
      </Draggable>
    </div>
  )
}
