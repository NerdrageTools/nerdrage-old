import { MongoClient } from 'mongodb'

describe('controllers/Article', () => {
  const campaign = 'qa'
  let connection
  let db

  beforeAll(async () => {
    connection = await MongoClient.connect(global.MONGO_URI, { useNewUrlParser: true })
    db = await connection.db(global.MONGO_DB_NAME)
  })
  afterAll(async () => {
    await connection.close()
    await db.close()
  })

  it('mocks db', async () => {
    expect(await db.collection('articles').findOne({ campaign, slug: 'foo' })).toMatchSnapshot()
  })
})
