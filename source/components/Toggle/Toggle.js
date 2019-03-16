import React from 'react'
import IconOff from '@/icons/favorite-off.svg'
import IconOn from '@/icons/favorite-on.svg'
import noop from '@/utilities/noop'
import './Toggle.scss'

export default function Toggle({
  className = '',
  offIcon = IconOff,
  onIcon = IconOn,
  onToggle = noop,
  value = false,
  ...props
}) {
  const Icon = value ? onIcon : offIcon
  return (
    <Icon
      className={`toggle ${value ? 'on' : 'off'} ${className}`}
      onClick={onToggle}
      {...props}
    />
  )
}