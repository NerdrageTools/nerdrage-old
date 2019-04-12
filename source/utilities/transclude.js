import cheerio from 'cheerio'
import Article from '@/server/models/Article'
import unique from '@/utilities/unique'

export default function transclude(html, campaignFilter) {
  const $ = cheerio.load(html, { decodeEntities: false, xmlMode: true })
  const links = []
  const missing = []

  return Promise.all($('include').map((_, includeEl) => {
    const $include = $(includeEl)
    $include.addClass('noedit')
    const includes = {}

    const transclusions = []
    const from = $include.attr('from')
    links.push(from)

    if (!includes[from]) {
      includes[from] = Article.findOne({
        $and: [
          { $or: [{ slug: from }, { aliases: from }] },
          campaignFilter,
        ],
      })
    }

    return includes[from].then(article => {
      if (!article) {
        $include.html(`\n<Warning>Transcluded Article '${from}' does not exist.</Warning>\n`)
        links.push(from)
        missing.push(from)
        return Promise.resolve()
      }

      const $article = $.load(article.html, { decodeEntities: false, xmlMode: true })

      const sections = $include.attr('sections')
      if (sections === '*' || !sections) {
        transclusions.push($article.html())
      } else {
        sections.split(',').map(s => s.trim()).filter(Boolean).forEach(section => {
          $article(`#${section}`).each((_, sectionEl) => {
            transclusions.push($article(sectionEl).html())
          })
        })
      }

      const firstPass = `\n${transclusions.map(line => `  ${line}`).join('\n')}\n`
      return transclude(firstPass, campaignFilter).then(transcluded => {
        $include.html(transcluded.html)
        links.push(...transcluded.links)
        missing.push(...transcluded.missing)
        return Promise.resolve(true)
      })
    })
  }).get())
    .then(() => ({
      html: $.html(),
      links: unique(links.filter(Boolean)).sort(),
      missing: unique(missing.filter(Boolean)).sort(),
    }))
}
