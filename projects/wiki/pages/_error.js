import React from 'react'

export default function Error(props) {
  return (
    <div className="error">
      {JSON.stringify(props)}
    </div>
  )
}
