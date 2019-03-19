import Link from 'next/link'
import React from 'react'
import SearchBox from '@/components/SearchBox'
import UserMenu from '@/components/UserMenu'
import Logo from '@/icons/fist.svg'
import NavigationIcon from '@/icons/Navigation'
import noop from '@/utilities/noop'
import './Header.scss'

export default function Header({
  onNavigationIconClick = noop,
}) {
  return (
    <div className="header">
      <Link href="/article/home">
        <div className="logo">
          <Logo className="logo x2" />
          <div className="nerd">Nerd</div>
          <div className="rage">RAGE</div>
        </div>
      </Link>
      <SearchBox />
      <NavigationIcon className="navigation toggle" onClick={onNavigationIconClick} />
      <UserMenu />
    </div>
  )
}
