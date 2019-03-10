import mockingoose from 'mockingoose'
import mongoose from 'mongoose'
import {
  deleteSheet,
  getSheet,
  permissions,
  upsertSheet,
} from './SheetController'
import Campaign from '@/server/models/Campaign'
import Sheet from '@/server/models/Sheet'

const { ObjectId } = mongoose.Types

const ADMIN = { _id: '000000000000', isAdmin: true }
const OWNER = { _id: '111111111111' }
const EDITOR = { _id: '222222222222' }
const PLAYER = { _id: '333333333333' }
const CAMPAIGN = (props = {}) => new Campaign({
  _id: '111111111111',
  domain: 'test',
  editors: [EDITOR._id],
  owners: [OWNER._id],
  players: [PLAYER._id],
  ...props,
})
const SHEET = (props = {}) => new Sheet({
  _id: '111111111111',
  campaign: null,
  data: {},
  ownedBy: OWNER._id,
  public: false,
  slug: 'test',
  ...props,
})

const mockRequest = (slug = 'test', { campaign = CAMPAIGN(), session = {}, body = {} } = {}) => ({
  body,
  campaign,
  params: { slug },
  session,
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
      mockingoose.Sheet.toReturn(SHEET(), 'findOne')
      const request = mockRequest('test', { session: ADMIN })
      const response = mockResponse()
      const next = jest.fn()
      await permissions('edit')(request, response, next)

      expect(response.status).not.toHaveBeenCalled()
      expect(next).toHaveBeenCalled()

      done()
    })
    it('returns 401 to non-viewers if required', async done => {
      mockingoose.Sheet.toReturn(SHEET(), 'findOne')
      const request = mockRequest('test', { campaign: CAMPAIGN({ private: true }) })
      const response = mockResponse()
      const next = jest.fn()
      await permissions('view')(request, response, next)

      expect(response.status).toHaveBeenCalledWith(401)
      expect(response.json.mock.calls[0][0].message).toMatch(/This content is private/)
      expect(next).not.toHaveBeenCalled()

      done()
    })
    it('returns 401 to non-editors', async done => {
      const response = mockResponse()
      const next = jest.fn()
      await permissions('edit')(mockRequest('test', { session: PLAYER }), response, next)

      expect(response.status).toHaveBeenCalledWith(401)
      expect(response.json.mock.calls[0][0].message).toMatch(/You do not have permission to edit/)
      expect(next).not.toHaveBeenCalled()

      done()
    })
    it('passes for non-owners if sheet is public', async done => {
      mockingoose.Sheet.toReturn(SHEET({ public: true }), 'findOne')
      const response = mockResponse()
      const next = jest.fn()
      await permissions('view')(mockRequest('test', { session: PLAYER }), response, next)

      expect(response.status).not.toHaveBeenCalled()
      expect(next).toHaveBeenCalled()

      done()
    })
  })
  describe('getSheet', () => {
    it('returns 404 if sheet is not found', async done => {
      const response = mockResponse()
      await getSheet({ domain: 'test', sheet: null, slug: 'test' }, response)

      expect(response.status).toHaveBeenCalledWith(404)
      expect(response.json.mock.calls[0][0].message).toMatch(/Unable to find sheet/)

      done()
    })
    it('returns article if found', async done => {
      const sheet = SHEET()
      const response = mockResponse()

      await getSheet({ sheet }, response)
      expect(response.status).toHaveBeenCalledWith(200)
      expect(response.json.mock.calls[0][0]).toMatchObject(sheet.toJSON())

      done()
    })
  })
  describe('upsertSheet', () => {
    it('accepts updates', async done => {
      const campaign = CAMPAIGN()
      const request = {
        body: { data: { foo: 'bar' } },
        campaign,
        session: OWNER,
        sheet: SHEET(),
        slug: 'foo',
      }
      const response = mockResponse()

      mockingoose.Sheet.toReturn(SHEET({
        campaign: campaign._id,
        data: { foo: 'bar' },
        slug: 'foo',
      }), 'findOne')

      await upsertSheet(request, response)
      expect(response.status).toHaveBeenCalledWith(200)
      expect(response.json.mock.calls[0][0]).toMatchObject({
        data: { foo: 'bar' },
        ownedBy: ObjectId(OWNER._id),
        slug: 'foo',
      })

      done()
    })
  })
  describe('deleteSheet', () => {
    it('performs delete if article is found', async done => {
      const oldFn = Sheet.findOneAndDelete
      Sheet.findOneAndDelete = jest.fn()

      const request = { campaign: CAMPAIGN(), slug: 'foo' }
      const response = mockResponse()

      await deleteSheet(request, response)
      expect(Sheet.findOneAndDelete).toHaveBeenCalledWith({
        campaign: request.campaign._id,
        slug: 'foo',
      })
      expect(response.status).toHaveBeenCalledWith(204)
      expect(response.send).toHaveBeenCalled()

      Sheet.findOneAndDelete = oldFn

      done()
    })
  })
})
