import React from 'react'
import ArticleSearchBox from '@/components/SearchBox/ArticleSearchBox'
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
      <div className="logo">
        <Logo className="logo x2" />
        <div className="nerd">Nerd</div>
        <div className="rage">RAGE</div>
      </div>
      <ArticleSearchBox />
      <NavigationIcon className="navigation toggle" onClick={onNavigationIconClick} />
      <UserMenu />
    </div>
  )
}
