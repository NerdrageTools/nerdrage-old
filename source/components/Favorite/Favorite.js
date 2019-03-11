import React from 'react'
import IconOff from '@/icons/favorite-off.svg'
import IconOn from '@/icons/favorite-on.svg'
import noop from '@/utilities/noop'
import './Favorite.scss'

const Favorite = ({ onToggle = noop, value = false }) => {
  const Icon = value ? IconOn : IconOff
  return (
    <Icon
      className={`favorite ${value ? 'on' : 'off'}`}
      onClick={onToggle}
    />
  )
}

Favorite.displayName = 'Favorite'
export default Favorite
