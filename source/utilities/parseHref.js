export default href => {
  if (typeof href !== 'string') return {}

  const [bare] = href.split(/[#?]/)
  const parts = bare.split('/').filter(Boolean)
  const slug = parts.pop()
  const type = parts.pop() || ''
  const subdomain = parts.pop() || ''

  return { slug, subdomain, type }
}
