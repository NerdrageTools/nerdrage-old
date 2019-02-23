import mongoose from 'mongoose'
import transclude from './transclude'
import Article from '@/server/models/Article'

describe('utilities/transclude', () => {
  beforeAll(async done => {
    await mongoose.connect('mongodb://localhost/test', {
      useCreateIndex: true,
      useNewUrlParser: true,
    })
    done()
  })

  it('transcludes', async done => {
    await Article.deleteMany({ slug: { $in: ['a', 'b', 'c'] } })
    await Article.create([
      /* eslint-disable sort-keys */
      { slug: 'a', title: 'Ant', html: 'Ant!' },
      { slug: 'b', title: 'Bug', html: 'Nope! <div id="simple">Bug!</div>' },
      { aliases: ['cat'], slug: 'c', title: 'Cat', html: `
        Nope!
        <div id="simple">Foo</div>
        <div id="nested">
          Bar
          <include sections="simple" from="b" />
        </div>
      ` },
      /* eslint-enable sort-keys */
    ])

    const html = `
      <h3>Title</h3>
      <include sections="*" from="a" />
      <include sections="simple" from="b" />
      <include sections="simple,nested" from="c" />
      <include sections="simple,nested" from="cat" />
      <include sections="*" from="d" />
      <include sections="missing,missing-2" from="e" />
    `

    const transcluded = await transclude(html)
    expect(transcluded.links).toEqual(['a', 'b', 'c', 'cat', 'd', 'e'])
    expect(transcluded.missing).toEqual(['d', 'e'])
    expect(transcluded.html).toMatchSnapshot()

    done()
  })

  afterAll(async done => {
    await mongoose.disconnect()
    done()
  })
})
