import React from 'react'
import ReactDOM from 'react-dom'
import Dialog from '@/components/Dialog'
import './prompt.scss'

export default async function alert(text = '', title = 'Prompt') {
  const container = document.createElement('div')
  document.body.appendChild(container)

  return new Promise(resolve => {
    const handleOk = () => resolve()

    ReactDOM.render((
      <Dialog className="prompt" modal onOk={handleOk} showCancel={false} title={title}>
        <div className="text">{text}</div>
      </Dialog>
    ), container)
  }).finally(() => {
    document.body.removeChild(container)
  })
}
