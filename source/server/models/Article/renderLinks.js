import url from 'url'
import cheerio from 'cheerio'
import Article from '@/server/models/Article'
import unique from '@/utilities/unique'

export default async function renderLinks(html, campaignFilter = { campaign: null }) {
	const $ = cheerio.load(html || '', { decodeEntities: false, xmlMode: true })
	const links = []

	$('a').each((_, element) => {
		const $link = $(element)
		const href = $link.attr('href') || ''
		const parsedUrl = url.parse(href)

		const isInternal = !parsedUrl.hostname
		if (isInternal) {
			const parts = parsedUrl.pathname.split('/').filter(Boolean)
			const slug = parts.pop()
			const type = parts.pop() || 'article'
			const subdomain = parts.pop() || ''

			$link.attr('href', `/${type}/${slug}`)
			$link.attr('slug', slug)
			$link.attr('subdomain', subdomain)
			$link.attr('type', type)

			if (subdomain) {
				$link.addClass('cross-campaign')
			} else {
				links.push(slug)
			}
		} else {
			$link.attr('target', '_new').addClass('external')
		}
	})

	const linked = await Article.find({
		$and: [
			campaignFilter,
			{ $or: [{ slug: { $in: links } }, { aliases: { $in: links } }] },
		],
	}).select('slug aliases')
		.exec()
	const foundLinks = (linked || []).reduce((all, { aliases, slug }) => (
		[...all, slug, ...aliases]
	), [])

	const missing = links.filter(link => !foundLinks.includes(link))

	$('a').each((_, element) => {
		const $link = $(element)
		const slug = $link.attr('slug') || ''
		const type = $link.attr('type') || ''
		if (type === 'article' && missing.includes(slug)) {
			$link.addClass('missing')
		}
	})

	return Promise.resolve({
		html: $.html(),
		links: unique(links).sort(),
		missing: unique(missing).sort(),
	})
}
