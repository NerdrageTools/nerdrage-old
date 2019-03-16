import React from 'react'
import './_error.scss'

export default function Error({
  message = 'An unknown error occurred.',
  statusCode = 500,
}) {
  return (
    <div className="error page">
      <h1 className="status-code">{statusCode}</h1>
      <div className="message">{message}</div>
    </div>
  )
}
