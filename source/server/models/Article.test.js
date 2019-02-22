import mongoose from 'mongoose'
import Article from './Article'

const { ObjectId } = mongoose.Types

mongoose.connect('mongodb://localhost/test', {
  useCreateIndex: true,
  useNewUrlParser: true,
})

describe('models/Article', () => {
  it('uniques and sorts aliases/tags onSave', async done => {
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

  it('clears aliases from other articles onSave', async done => {
    let A = new Article({
      _id: ObjectId('5c6f906d4a0e252061614c8d'),
      aliases: ['a', 'b'],
      slug: 'a',
      title: 'A',
    })
    A = await A.save()

    expect(A.toJSON().aliases).toEqual(['a', 'b'])

    let B = new Article({
      _id: ObjectId('5c6f906d4a0e252061614c8e'),
      aliases: ['b', 'c'],
      slug: 'b',
      title: 'B',
    })
    B = await B.save()
    A = await Article.findOne({ _id: A._id })

    expect(B.toJSON().aliases).toEqual(['b', 'c'])
    expect(A.toJSON().aliases).toEqual(['a'])

    let C = new Article({
      _id: ObjectId('5c6f906d4a0e252061614c8f'),
      aliases: ['a', 'b', 'c'],
      slug: 'c',
      title: 'C',
    })
    C = await C.save()
    B = await Article.findOne({ _id: B._id })
    A = await Article.findOne({ _id: A._id })

    expect(C.toJSON().aliases).toEqual(['a', 'b', 'c'])
    expect(B.toJSON().aliases).toEqual([])
    expect(A.toJSON().aliases).toEqual([])

    done()
  })

  afterAll(async done => {
    await mongoose.disconnect()
    done()
  })
})
