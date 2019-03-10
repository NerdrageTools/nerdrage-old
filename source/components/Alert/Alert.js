import React from 'react'
import './Alert.scss'

export default function Alert({
  children = [],
  type = 'info',
}) {
  return <div className={`alert ${type}`}>{children}</div>
}
