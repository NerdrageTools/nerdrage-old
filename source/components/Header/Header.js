import Link from 'next/link'
import React from 'react'
import SearchBox from '@/components/SearchBox'
import Logo from '@/icons/fist.svg'
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
