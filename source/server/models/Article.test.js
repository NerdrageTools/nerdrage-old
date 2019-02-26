import mongoose from 'mongoose'
import Article from './Article'

const { ObjectId } = mongoose.Types

describe('models/Article', () => {
  beforeAll(async done => {
    await mongoose.connect('mongodb://localhost/test-articles', {
      useCreateIndex: true,
      useNewUrlParser: true,
    })
    done()
  })
  beforeEach(async done => {
    await Article.deleteMany({})
    await Article.create([
      { _id: ObjectId('aaaaaaaaaaaa'), aliases: ['albatross'], slug: 'a', title: 'A' },
      { _id: ObjectId('bbbbbbbbbbbb'), aliases: ['boggin', 'bug'], slug: 'b', title: 'B' },
      { _id: ObjectId('cccccccccccc'), aliases: ['carpet', 'cactus'], slug: 'c', title: 'C' },
    ])
    done()
  })

  describe('onSave', () => {
    it('uniques and sorts aliases/tags', async done => {
      await Article.deleteMany({})

      const article = new Article({
        _id: ObjectId('5c6f906d4a0e252061614c8c'),
        aliases: ['b', 'b', 'c', 'a'],
        slug: 'slug',
        tags: ['b', 'b', 'c', 'a'],
        title: 'foo',
      })
      let updated = await article.save()

      expect(updated.toJSON().aliases).toEqual(['a', 'b', 'c'])
      expect(updated.toJSON().tags).toEqual(['a', 'b', 'c'])

      updated.aliases.push('a')
      updated.tags.push('a')

      expect(updated.toJSON().aliases).toEqual(['a', 'b', 'c', 'a'])
      expect(updated.toJSON().tags).toEqual(['a', 'b', 'c', 'a'])

      updated = await updated.save()

      expect(updated.toJSON().aliases).toEqual(['a', 'b', 'c'])
      expect(updated.toJSON().tags).toEqual(['a', 'b', 'c'])

      await updated.remove({ _id: ObjectId('5c6f906d4a0e252061614c8c') })
      done()
    })

    it('clears aliases from other articles', async done => {
      const NEW = await Article.create({
        aliases: ['albatross', 'bug', 'carpet'],
        slug: 'new',
        title: 'New',
      })

      const A = await Article.findOne({ slug: 'a' })
      const B = await Article.findOne({ slug: 'b' })
      const C = await Article.findOne({ slug: 'c' })
      expect(A.toJSON().aliases).not.toContain('albatross')
      expect(B.toJSON().aliases).not.toContain('bug')
      expect(C.toJSON().aliases).not.toContain('carpet')
      expect(NEW.toJSON().aliases).toEqual(['albatross', 'bug', 'carpet'])

      done()
    })
  })

  it('enforces unique aliases onSave', async () => {
    expect(await Article.find({ aliases: 'albatross' })).toHaveLength(1)
    expect(await Article.find({ aliases: 'bug' })).toHaveLength(1)
    expect(await Article.find({ aliases: 'carpet' })).toHaveLength(1)

    const article = await new Article({
      _id: ObjectId('dddddddddddd'),
      aliases: ['albatross', 'bug', 'carpet'],
      html: `
        <a href="/a">A</a>
        <a href="/b">B</a>
        <a href="/e">E</a>
        <a href="/f">F</a>
      `,
      slug: 'd',
      title: 'D',
    }).save()

    expect(article.toJSON().aliases).toEqual(['albatross', 'bug', 'carpet'])
    const albatross = await Article.find({ aliases: 'albatross' })
    expect(albatross).toHaveLength(1)
    expect(albatross[0]._id.equals(article._id)).toBeTruthy()

    const bug = await Article.find({ aliases: 'bug' })
    expect(bug).toHaveLength(1)
    expect(bug[0]._id.equals(article._id)).toBeTruthy()

    const carpet = await Article.find({ aliases: 'carpet' })
    expect(carpet).toHaveLength(1)
    expect(carpet[0]._id.equals(article._id)).toBeTruthy()

    return Article.deleteMany({ slug: { $in: ['a', 'b', 'c'] } })
  })

  it('renders cleanly', async done => {
    const NEW = new Article({
      html: `
        <h1>New!</h1>
        <a href="/a">A</a>
        <a href="/missing-link">Missing!</a>
        <include from="b" sections="*" />
        <include from="missing-include" sections="*" />
      `,
      slug: 'new',
      title: 'New',
    })

    const rendered = await NEW.render()
    expect(rendered.links).toEqual(['a', 'b', 'missing-include', 'missing-link'])
    expect(rendered.missing).toEqual(['missing-include', 'missing-link'])
    expect(rendered.html).toMatchSnapshot()

    done()
  })

  afterAll(async done => {
    await mongoose.connection.db.dropDatabase()
    await mongoose.disconnect()
    done()
  })
})
