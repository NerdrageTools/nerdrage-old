import url from 'url'
import cheerio from 'cheerio'
import Article from '@/server/models/Article'
import { extractUrlSlug } from '@/utilities/slugs'
import unique from '@/utilities/unique'

export default async function renderLinks(html, campaignId) {
  const $ = cheerio.load(html || '', { decodeEntities: false, xmlMode: true })
  const links = []

  $('a').each((_, element) => {
    const $link = $(element)
    const href = $link.attr('href') || ''
    const slug = extractUrlSlug(href)
    const parsedUrl = url.parse(href)

    const isInternal = !parsedUrl.hostname
    if (isInternal) {
      if (slug.match(/\.(gif|jpg|png)$/)) {
        $link.attr('href', `/media/${slug}`)
      } else {
        $link.attr('href', `/page/${slug}`)
      }
      links.push(slug)
    } else {
      $link.attr('target', '_new').addClass('external')
    }
  })

  const linked = await Article.find({
    $and: [
      { $or: [{ campaign: null }, { campaign: campaignId }] },
      { $or: [{ slug: { $in: links } }, { aliases: { $in: links } }] },
    ],
  })
    .select('slug aliases')
    .sort({ campaign: -1 })
    .exec()
  const foundLinks = (linked || []).reduce((all, { aliases, slug }) => (
    [...all, slug, ...aliases]
  ), [])

  const missing = links.filter(link => !foundLinks.includes(link))

  $('a').each((_, element) => {
    const $link = $(element)
    const href = $link.attr('href') || ''
    const slug = extractUrlSlug(href)
    if (missing.includes(slug)) {
      $link.addClass('missing')
    }
  })

  return Promise.resolve({
    html: $.html(),
    links: unique(links).sort(),
    missing: unique(missing).sort(),
  })
}
