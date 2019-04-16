import NextLink from 'next/link'
import React, { useContext } from 'react'
import Application from '@/contexts/Application'

export default function Link({
  active,
  children,
  slug = '',
  type = 'article',
  ...props
}) {
  const context = useContext(Application)
  const campaign = props.campaign || context.campaign
  const subdomain = props.subdomain || context.subdomain
  const { rootUrl } = useContext(Application)
  const contents = children || type

  if (active) {
    return <span className="active link" title={contents}>{contents}</span>
  }

  if (subdomain && subdomain !== campaign.subdomain) {
    let href = `//${subdomain}.${rootUrl}/${type}`
    if (type !== 'campaign') href += `/${slug}`

    return <a {...{ ...props, href, subdomain }}>{contents}</a>
  }

  let as = `/${type}`
  let href = `/${type}`
  if (type !== 'campaign') {
    as += `/${slug}`
    href += `?slug=${slug}`
  }

  return (
    <NextLink {...{ as, href }}>
      <a {...props}>{contents}</a>
    </NextLink>
  )
}
