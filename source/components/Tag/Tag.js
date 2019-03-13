import React, { Component } from 'react'
import Link from '@/components/Link'
import Remove from '@/icons/remove.svg'
import TagIcon from '@/icons/tag.svg'
import noop from '@/utilities/noop'
import './Tag.scss'

export default class Tag extends Component {
  static defaultProps = {
    asLink: false,
    className: '',
    onRemove: noop,
    removable: false,
    tag: '',
  }

  handleRemove = () => this.props.onRemove(this.props.tag)

  render = () => {
    const { asLink, className, removable, tag } = this.props
    const classNames = [
      'tag',
      asLink ? 'tag-link' : '',
      className,
      removable ? 'removable' : '',
    ].filter(Boolean).join(' ')

    return (
      <span className={classNames}>
        <TagIcon />
        {asLink
          ? <Link className="link" href={`/article/${tag}`}>{tag}</Link>
          : <span className="text">{tag}</span>
        }
        {removable && <Remove className="remove" onClick={this.handleRemove} />}
      </span>
    )
  }
}
