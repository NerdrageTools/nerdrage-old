import Logo from 'core/icons/fist.svg'
import Link from 'next/link'
import React, { Component } from 'react'
import SearchBox from '@/components/SearchBox'
import CampaignContext from '@/contexts/Campaign'
import './Header.scss'

export default class Header extends Component {
  static contextType = CampaignContext

  render = () => {
    const { theme } = this.context

    return (
      <div
        className="header"
        style={{
          backgroundColor: theme.primary,
          color: theme.secondary,
          fontFamily: theme.fontFamily,
        }}
      >
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
}
