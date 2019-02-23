import Article from '@/server/models/Article'
import unique from '@/utilities/unique/unique'
import cheerio from 'cheerio'

export default function transclude(html) {
  const $ = cheerio.load(html, { xmlMode: true, decodeEntities: false })
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
      includes[from] = Article.findOne({ $or: [{ slug: from }, { aliases: from }] })
    }

    return includes[from].then((article) => {
      if (!article) {
        $include.html(`\n<div class="warning">Included Article '${from}' does not exist</div>\n`)
        links.push(from)
        missing.push(from)
        return Promise.resolve()
      }

      const $article = $.load(article.html, { xmlMode: true, decodeEntities: false })

      const sections = $include.attr('sections')
      if (sections === '*' || !sections) {
        transclusions.push($article.html())
      } else {
        sections.split(',').map(s => s.trim()).filter(Boolean).forEach((section) => {
          $article(`#${section}`).each((_, sectionEl) => {
            transclusions.push($article(sectionEl).html())
          })
        })
      }

      const firstPass = `\n${transclusions.map(line => `  ${line}`).join('\n')}\n`
      return transclude(firstPass).then((transcluded) => {
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
