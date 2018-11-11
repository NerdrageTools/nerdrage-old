import Logo from 'core/icons/fist.svg'
import Link from 'next/link'
import React, { Component } from 'react'
import SearchBox from '@/components/SearchBox'
import ThemeContext from '@/contexts/Theme'
import './Header.scss'

export default class Header extends Component {
  static contextType = ThemeContext

  render = () => {
    const theme = this.context

    return (
      <div
        className="header"
        style={{
          backgroundColor: theme.primary,
          color: theme.secondary,
          fontFamily: theme.fontForBody,
        }}
      >
        <Link as="/" href="/index">
          <>
            <Logo className="logo x2" />
            <div style={{ fontFamily: theme.fontForBody }}>NerdRAGE</div>
          </>
        </Link>
        <SearchBox />
      </div>
    )
  }
}
