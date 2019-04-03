import React from 'react'
import WarningIcon from '@/icons/warning.svg'
import '@/styles/classes/warning.scss'

export default function Warning({
  children = '',
}) {
  return (
    <div className="warning">
      <WarningIcon />
      {children}
    </div>
  )
}
