import mockingoose from 'mockingoose'
import mongoose from 'mongoose'
import {
  deleteArticle,
  getArticle,
  updateArticle,
} from './ArticleController'
import Article from '@/server/models/Article'
import Campaign from '@/server/models/Campaign'

const { ObjectId } = mongoose.Types

const ADMIN = { _id: '000000000000', isAdmin: true }
const OWNER = { _id: '111111111111' }
const EDITOR = { _id: '222222222222' }
const PLAYER = { _id: '333333333333' }
const ARTICLE = (props = {}) => new Article({
  _id: '111111111111',
  campaign: null,
  slug: 'test',
  title: 'test',
  ...props,
})
const CAMPAIGN = (props = {}) => new Campaign({
  _id: '111111111111',
  domain: 'test',
  editors: [EDITOR._id],
  owners: [OWNER._id],
  players: [PLAYER._id],
  ...props,
})

const mockRequest = (slug, session = {}, body = {}) => (
  { campaign: slug, session, params: { slug }, body }
)
const mockResponse = () => {
  const response = {}
  response.json = jest.fn(() => response)
  response.send = jest.fn(() => response)
  response.status = jest.fn(() => response)
  return response
}

describe('server/controllers/ArticleController', () => {
  describe('getArticle', () => {
    it('returns 401 for private campaigns the user is not a member of', async done => {
      mockingoose.Campaign.toReturn(CAMPAIGN({ private: true }), 'findOne')
      const response = mockResponse()

      await getArticle(mockRequest('test', {}), response)
      expect(response.status).toHaveBeenCalledWith(401)

      done()
    })
    it('returns 200 for public campaigns', async done => {
      mockingoose.Article.toReturn(ARTICLE(), 'findOne')
      mockingoose.Campaign.toReturn(CAMPAIGN(), 'findOne')
      const response = mockResponse()

      await getArticle(mockRequest('test', ADMIN), response)
      expect(response.status).toHaveBeenCalledWith(200)

      done()
    })
    it('returns 200 for campaign participants', async done => {
      mockingoose.Article.toReturn(ARTICLE(), 'findOne')
      mockingoose.Campaign.toReturn(CAMPAIGN({ private: true }), 'findOne')
      const response = mockResponse()

      await getArticle(mockRequest('test', PLAYER), response)
      expect(response.status).toHaveBeenCalledWith(200)

      done()
    })
    it('returns 200 and defaults for articles not found', async done => {
      mockingoose.Article.toReturn(null, 'findOne')
      mockingoose.Campaign.toReturn(CAMPAIGN(), 'findOne')
      const response = mockResponse()

      await getArticle(mockRequest('test'), response)
      expect(response.status).toHaveBeenCalledWith(200)
      expect(response.json.mock.calls[0][0]).toMatchObject({
        campaign: { domain: 'test' },
        slug: 'test',
      })
      expect(response.json.mock.calls[0][0]._id).toBeUndefined()

      done()
    })
  })
  describe('updateArticle', () => {
    it('returns 401 if user is not editor', async done => {
      mockingoose.Article.toReturn(ARTICLE(), 'findOne')
      mockingoose.Campaign.toReturn(CAMPAIGN(), 'findOne')
      const response = mockResponse()

      await updateArticle(mockRequest('test', {}, { html: 'foo' }), response)
      expect(response.status).toHaveBeenCalledWith(401)

      done()
    })
    it('accepts updates from editors', async done => {
      mockingoose.Article.toReturn(ARTICLE(), 'findOne')
      mockingoose.Campaign.toReturn(CAMPAIGN(), 'findOne')
      const response = mockResponse()

      await updateArticle(mockRequest('test', EDITOR, { html: 'foo' }), response)
      expect(response.status).toHaveBeenCalledWith(200)
      expect(response.json.mock.calls[0][0]).toMatchObject({ html: 'foo\n' })

      done()
    })
    it('always writes to current campaign', async done => {
      mockingoose.Article
        .toReturn(null, 'findOne')
        .toReturn([], 'find')
      mockingoose.Campaign.toReturn(
        CAMPAIGN({ _id: '111111111111' }),
        'findOne'
      )
      const response = mockResponse()

      await updateArticle(mockRequest('test', EDITOR, {
        html: 'foo',
        title: 'Foo!',
      }), response)
      expect(response.status).toHaveBeenCalledWith(200)
      const json = response.json.mock.calls[0][0]
      expect(json).toMatchObject({
        campaign: ObjectId('111111111111'),
        html: 'foo\n',
        slug: 'test',
      })

      done()
    })
  })
  describe('deleteArticle', () => {
    it('rejects DELETE calls from non-editors', async done => {
      mockingoose.Campaign.toReturn(CAMPAIGN(), 'findOne')
      const response = mockResponse()

      await deleteArticle(mockRequest('test', PLAYER), response)
      expect(response.status).toHaveBeenCalledWith(401)

      done()
    })
    it('accepts DELETE calls from editors', async done => {
      mockingoose.Campaign.toReturn(CAMPAIGN(), 'findOne')
      const response = mockResponse()

      await deleteArticle(mockRequest('test', EDITOR), response)
      expect(response.status).toHaveBeenCalledWith(204)

      done()
    })
  })
})
