import NextError from 'next/error'
import React from 'react'
import './_error.scss'

export default function Error(props) {
  return (
    <div className="error page">
      <NextError {...props} />
    </div>
  )
}
