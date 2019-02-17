import Logo from '@nerdrage/core/icons/fist.svg'
import SearchBox from '@nerdrage/wiki/components/SearchBox'
import Link from 'next/link'
import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <div className="header">
      <Link as="/" href="/index">
        <div className="logo">
          <Logo className="logo x2" />
          <div className="nerd">Nerd</div>
          <div className="rage">RAGE</div>
        </div>
      </Link>
      <SearchBox />
    </div>
  )
}
