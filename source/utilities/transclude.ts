import { DocumentType } from '@typegoose/typegoose'
import cheerio from 'cheerio'
import { ICampaignData } from '~/server/models'
import { Article, ArticleClass } from '~/server/models/Article'

export async function transclude(
	campaign: ICampaignData,
	html: string,
): Promise<string> {
	const $ = cheerio.load(html, { decodeEntities: false, xmlMode: true })
	const includes = $('include[from]')
	if (!includes.length) return html

	includes.map(async (_, el) => {
		const $el = $(el)
		const slug = $el.attr('from') ?? ''
		const sections = ($el.attr('sections') ?? '*').split(',').map(s => s.trim())
		const article = await Article.findByCampaignSlug(slug, campaign) as DocumentType<ArticleClass>

		if (!article) {
			$el.html(`\n<Warning>Transcluded article '${slug}' does not exist.</Warning>\n`)
		} else {
			const transclusions: string[] = []
			sections.forEach(async section => {
				if (section === '*') {
					transclusions.push(article.html ?? '')
				} else {
					transclusions.push(
						article?.sections.get(section)
							?? `<!-- Transcluded section '${section}' of article '${slug}' does not exist -->`,
					)
				}
			})
			$el.html(transclusions.join('\n'))
		}

		$el.attr('resolved', 'true')
	})

	return $.html()
}

// export async function transclude(
// 	campaign: ICampaignData,
// 	html: string,
// ): Promise<string> {
// 	const $ = cheerio.load(html, { decodeEntities: false, xmlMode: true })
// 	const includes = $('include').toArray()
// 	const slugs = unique<string>(
// 		includes
// 			.map(el => ($(el).attr('from') ?? '').trim().toLowerCase())
// 			.filter(Boolean),
// 	)
// 	const articles = await Articles.findByCampaignSlugs(slugs, campaign)

// 	includes.forEach(el => {
// 		const $el = $(el)
// 		$el.addClass('noedit')
// 		const slug = $el.attr('from')
// 		const article = articles.find(a => a.slug === slug)
// 		if (!article) {
// 			$el.html(`\n<Warning>Transcluded Article '${slug}' does not exist.</Warning>\n`)
// 		} else {
// 			const $article = cheerio.load(article.html, { decodeEntities: false, xmlMode: true })
// 			const sections = $el.attr('sections')
// 			if (sections === '*' || !sections) {
// 				$el.html($article.html())
// 			} else {
// 				let transclusion = ''
// 				sections.split(',').map(s => s.trim()).filter(Boolean).forEach(section => {
// 					$article(`#${section}`).each((_, sectionEl) => {
// 						transclusion += $article(sectionEl).html()
// 					})
// 				})
// 				$el.html(transclusion)
// 			}
// 		}
// 	})

// 	return html
// }

// 	// return Promise.all($('include').map((_, includeEl) => {
// 	// 	const $include = $(includeEl)
// 	// 	$include.addClass('noedit')
// 	// 	const includes = {}

// 	// 	const transclusions = []
// 	// 	const from = $include.attr('from')!
// 	// 	links.push(from)

// 	// 	if (!includes[from]) {
// 	// 		includes[from] = Articles.findOne({
// 	// 			$and: [
// 	// 				campaignFilter,
// 	// 				{ $or: [{ slug: from }, { aliases: from }] },
// 	// 			],
// 	// 		})
// 	// 	}

// 	// 	return includes[from].then(article => {
// 	// 		if (!article) {
// 	// 			$include.html(`\n<Warning>Transcluded Article '${from}' does not exist.</Warning>\n`)
// 	// 			links.push(from)
// 	// 			missing.push(from)
// 	// 			return Promise.resolve()
// 	// 		}

// 	// 		const $article = $.load(article.html, { decodeEntities: false, xmlMode: true })

// 	// 		const sections = $include.attr('sections')
// 	// 		if (sections === '*' || !sections) {
// 	// 			transclusions.push($article.html())
// 	// 		} else {
// 	// 			sections.split(',').map(s => s.trim()).filter(Boolean).forEach(section => {
// 	// 				$article(`#${section}`).each((_, sectionEl) => {
// 	// 					transclusions.push($article(sectionEl).html())
// 	// 				})
// 	// 			})
// 	// 		}

// 	// 		const firstPass = `\n${transclusions.map(line => `  ${line}`).join('\n')}\n`
// 	// 		return transclude(firstPass, campaignFilter).then(transcluded => {
// 	// 			$include.html(transcluded.html)
// 	// 			links.push(...transcluded.links)
// 	// 			missing.push(...transcluded.missing)
// 	// 			return Promise.resolve(true)
// 	// 		})
// 	// 	})
// 	// }).get())
// 	// 	.then(() => ({
// 	// 		html: $.html(),
// 	// 		links: unique(links.filter(Boolean)).sort(),
// 	// 		missing: unique(missing.filter(Boolean)).sort(),
// 	// 	}))
// }
