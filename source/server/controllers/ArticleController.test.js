import mockingoose from 'mockingoose'
import mongoose from 'mongoose'
import {
  deleteArticle,
  getArticle,
  permissions,
  upsertArticle,
} from './ArticleController'
import Article from '@/server/models/Article'
import Campaign from '@/server/models/Campaign'
import pluck from '@/utilities/pluck'

const { ObjectId } = mongoose.Types

const ADMIN = { _id: ObjectId('000000000000'), isAdmin: true }
const OWNER = { _id: ObjectId('111111111111') }
const EDITOR = { _id: ObjectId('222222222222') }
const PLAYER = { _id: ObjectId('333333333333') }
const ARTICLE = (props = {}) => new Article({
  _id: '111111111111',
  campaign: null,
  slug: 'test',
  title: 'test',
  ...props,
})
const CAMPAIGN = (props = {}) => new Campaign({
  _id: '111111111111',
  editors: [EDITOR._id],
  owners: [OWNER._id],
  players: [PLAYER._id],
  subdomain: 'test',
  ...props,
})

const mockRequest = (slug = '', {
  body = {},
  campaign = CAMPAIGN(),
  user = {},
  ...rest
} = {}) => ({
  body,
  campaign,
  params: { slug },
  user,
  ...rest,
})
const mockResponse = () => {
  const response = {}
  response.json = jest.fn(() => response)
  response.send = jest.fn(() => response)
  response.status = jest.fn(() => response)
  return response
}

describe('server/controllers/ArticleController', () => {
  describe('permissions', () => {
    it('passes for Admin users', async done => {
      const request = mockRequest('test', { user: ADMIN })
      const response = mockResponse()
      const next = jest.fn()
      await permissions('edit')(request, response, next)

      expect(response.status).not.toHaveBeenCalled()
      expect(next).toHaveBeenCalled()

      done()
    })
    it('returns 401 to non-viewers if required', async done => {
      const request = mockRequest('test', { campaign: CAMPAIGN({ secret: true }) })
      const response = mockResponse()
      const next = jest.fn()
      await permissions('view')(request, response, next)

      expect(response.status).toHaveBeenCalledWith(401)
      expect(response.json.mock.calls[0][0].message).toMatch(/This content is private/)
      expect(next).not.toHaveBeenCalled()

      done()
    })
    it('returns 401 to non-editors if required', async done => {
      const request = mockRequest('test', { user: PLAYER })
      const response = mockResponse()
      const next = jest.fn()
      await permissions('edit')(request, response, next)

      expect(response.status).toHaveBeenCalledWith(401)
      expect(response.json.mock.calls[0][0].message).toMatch(/You do not have permission to edit/)
      expect(next).not.toHaveBeenCalled()

      done()
    })
    it('returns 401 to non-viewers if article is secret', async done => {
      mockingoose.Article.toReturn(ARTICLE({ secret: true }), 'findOne')
      const request = mockRequest()
      const response = mockResponse()
      const next = jest.fn()
      await permissions()(request, response, next)

      expect(response.status).toHaveBeenCalledWith(401)
      expect(response.json.mock.calls[0][0].message).toMatch(/This article is secret!/)
      expect(next).not.toHaveBeenCalled()

      done()
    })
  })
  describe('getArticle', () => {
    it('returns article if found', async done => {
      const request = { article: ARTICLE({ secret: true }), campaign: CAMPAIGN({ secret: true }) }
      const response = mockResponse()

      await getArticle(request, response)
      expect(response.status).toHaveBeenCalledWith(200)

      done()
    })
    it('returns 200 and defaults for articles not found', async done => {
      const request = { article: null, campaign: CAMPAIGN() }
      const response = mockResponse()

      await getArticle(request, response)
      expect(response.status).toHaveBeenCalledWith(200)
      expect(response.json.mock.calls[0][0]).toMatchObject({
        aliases: [],
        campaign: pluck(request.campaign, 'subdomain', 'title'),
        html: '\n',
        links: [],
        missing: [],
        secret: false,
        tags: [],
      })
      expect(response.json.mock.calls[0][0]._id).toBeUndefined()

      done()
    })
  })
  describe('upsertArticle', () => {
    it('accepts updates', async done => {
      const updates = { html: 'foo', title: 'Foo!' }
      const request = {
        article: ARTICLE(),
        body: updates,
        campaign: CAMPAIGN(),
        slug: 'foo',
        user: EDITOR,
      }
      const response = mockResponse()

      mockingoose.Article.toReturn(
        ARTICLE({ ...updates, campaign: ObjectId('111111111111'), slug: 'foo' }),
        'findOne'
      )

      await upsertArticle(request, response)
      expect(response.status).toHaveBeenCalledWith(200)
      expect(response.json.mock.calls[0][0]).toMatchObject({
        html: 'foo\n',
        slug: 'foo',
        title: 'Foo!',
      })

      done()
    })
    it('always writes to current campaign', async done => {
      const updates = { html: 'foo', slug: 'foo', title: 'Foo!' }
      const request = {
        article: null,
        body: updates,
        campaign: CAMPAIGN(),
        slug: 'foo',
        user: EDITOR,
      }
      const response = mockResponse()

      mockingoose.Article.toReturn(
        ARTICLE({ ...updates, campaign: ObjectId('111111111111') }),
        'findOne'
      )

      await upsertArticle(request, response)
      expect(response.status).toHaveBeenCalledWith(200)
      const json = response.json.mock.calls[0][0]
      expect(json).toMatchObject({
        campaign: ObjectId('111111111111'),
        html: 'foo\n',
        slug: 'foo',
      })

      done()
    })
  })
  describe('deleteArticle', () => {
    it('performs delete if article is found', async done => {
      const request = { article: ARTICLE() }
      request.article.delete = jest.fn()
      const response = mockResponse()

      await deleteArticle(request, response)
      expect(request.article.delete).toHaveBeenCalled()
      expect(response.status).toHaveBeenCalledWith(204)
      expect(response.send).toHaveBeenCalled()

      done()
    })
    it('returns 204 even if article is not found', async done => {
      const request = { article: null }
      const response = mockResponse()

      await deleteArticle(request, response)
      expect(response.status).toHaveBeenCalledWith(204)
      expect(response.send).toHaveBeenCalled()

      done()
    })
  })
})
