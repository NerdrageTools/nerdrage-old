import cheerio from 'cheerio'

export default function cleanUp(html) {
  const $ = cheerio.load(html || '', { decodeEntities: false, xmlMode: true })
  $('a').each((_, el) => {
    const $el = $(el)
    const href = $el.attr('href')

    $el.removeClass('missing')
      .removeClass('external')
      .removeAttr('target')
      .attr('href', href.replace(/^\/(article|media)\//, ''))
    if (($el.attr('class') || '').trim() === '') $el.removeAttr('class')
  })
  $('include').each((_, el) => $(el).removeClass('noedit').html(''))

  return $.html()
}
