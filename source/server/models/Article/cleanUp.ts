import cheerio from 'cheerio'
import { html_beautify as beautify } from 'js-beautify'
import parseHref from '~/utilities/parseHref'


export default function cleanUp(html: string = '') {
	const $ = cheerio.load(html ?? '', { decodeEntities: false, xmlMode: true })
	$('a').each((_, el) => {
		const $el = $(el)
		const href = $el.attr('href') ?? ''

		if (!href.includes('//')) {
			const parsed = parseHref($el.attr('href'))
			const slug = $el.attr('slug') || parsed.slug
			const type = $el.attr('type') || parsed.type
			const subdomain = $el.attr('subdomain') || parsed.subdomain
			$el.attr('href', `${subdomain}/${type}/${slug}`)
		}

		$el
			.removeClass('cross-campaign')
			.removeClass('external')
			.removeClass('missing')
			.removeClass($el.attr('type') ?? '')
			.removeAttr('slug')
			.removeAttr('subdomain')
			.removeAttr('target')
			.removeAttr('type')

		if (($el.attr('class') || '').trim() === '') {
			$el.removeAttr('class')
		}
	})
	$('include').each((_, el) => $(el).removeClass('noedit').html(''))

	return $.html()
}
