import React from 'react'
import ReactDOM from 'react-dom'
import Dialog from '@/components/Dialog'

export default async function prompt(text = '', title = 'Prompt') {
  const container = document.createElement('div')
  document.body.appendChild(container)

  return new Promise((resolve, reject) => {
    const handleNo = () => resolve(false)
    const handleYes = () => resolve(true)

    const handleKeyDown = event => {
      switch (event.key) {
        case 'Enter':
          return handleYes()
        case 'Escape':
          return handleNo()
        default:
          return undefined
      }
    }

    ReactDOM.render((
      <Dialog
        buttons={<>
          <button onClick={handleYes}>Yes</button>
          <button onClick={handleNo}>No</button>
        </>}
        modal
        okButtonText="Yes"
        onCancel={handleNo}
        onOk={handleYes}
        title={title}
      >
        <div className="text">{text}</div>
      </Dialog>
    ), container)
  }).finally(() => {
    document.body.removeChild(container)
  })
}
