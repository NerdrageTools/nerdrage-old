import Link from 'next/link'
import React from 'react'

export default function Index({ article = {} }) {
  return (
    <div className="article page">
      <h1>{article.title}</h1>
      <p>{article.html}</p>
    </div>
  )
}
