import Logo from 'core/icons/fist.svg'
import Link from 'next/link'
import React from 'react'
import SearchBox from 'wiki/components/SearchBox'
import './Header.scss'

export default function Header() {
  return (
    <div className="header">
      <Link as="/" href="/index">
        <div className="logo">
          <Logo className="logo x2" />
          <div>NerdRAGE</div>
        </div>
      </Link>
      <SearchBox />
    </div>
  )
}
