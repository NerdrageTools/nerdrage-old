import mockingoose from 'mockingoose'
import mongoose from 'mongoose'
import {
  deleteSheet,
  getSheet,
  getSheetRequest,
  permissions,
  upsertSheet,
} from './SheetController'
import Campaign from '@/server/models/Campaign'
import Sheet from '@/server/models/Sheet'

const { ObjectId } = mongoose.Types

const ADMIN = { _id: ObjectId('000000000000'), isAdmin: true }
const OWNER = { _id: ObjectId('111111111111'), isAdmin: false }
const EDITOR = { _id: ObjectId('222222222222'), isAdmin: false }
const PLAYER = { _id: ObjectId('333333333333'), isAdmin: false }
const ANY = { _id: ObjectId('444444444444'), isAdmin: false }

const CAMPAIGN = (props = {}, campaignPermissions = {}) => ({
  ...new Campaign({
    _id: '111111111111',
    subdomain: 'test',
    ...props,
  }).toJSON(),
  isEditor: false,
  isOwner: false,
  isParticipant: false,
  ...campaignPermissions,
})
const SHEET = (props = {}) => new Sheet({
  _id: '111111111111',
  data: {},
  ownedBy: OWNER,
  slug: 'test',
  ...props,
})

const mockRequest = (slug = 'test', {
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

describe('server/controllers/SheetController', () => {
  describe('getSheet', () => {
    it('sheet exists | secret campaign + sheet | non-participant', async done => {
      mockingoose.Sheet.toReturn(SHEET({ secret: true }), 'findOne')
      const result = await getSheet('test', CAMPAIGN({ secret: true }), ANY)

      expect(result.isEditor).toBe(false)
      expect(result.isOwner).toBe(false)
      expect(result.isVisible).toBe(false)

      done()
    })
    it('sheet exists | secret campaign + sheet | non-owner participant', async done => {
      mockingoose.Sheet.toReturn(SHEET({ secret: true }), 'findOne')
      const result = await getSheet('test', (
        CAMPAIGN({ secret: true }, { isParticipant: true })
      ), ANY)

      expect(result.isEditor).toBe(false)
      expect(result.isOwner).toBe(false)
      expect(result.isVisible).toBe(false)

      done()
    })
    it('sheet exists | public campaign + sheet | non-participant', async done => {
      mockingoose.Sheet.toReturn(SHEET({ secret: false }), 'findOne')
      const result = await getSheet('test', CAMPAIGN({ secret: false }), ANY)

      expect(result.isEditor).toBe(false)
      expect(result.isOwner).toBe(false)
      expect(result.isVisible).toBe(true)

      done()
    })
    it('sheet exists | secret campaign, public sheet | participant', async done => {
      mockingoose.Sheet.toReturn(SHEET({ secret: false }), 'findOne')
      const result = await getSheet('test', (
        CAMPAIGN({ secret: true }, { isParticipant: true })
      ), ANY)

      expect(result.isEditor).toBe(false)
      expect(result.isOwner).toBe(false)
      expect(result.isVisible).toBe(true)

      done()
    })
    it('sheet exists | secret campaign + sheet | sheet owner', async done => {
      mockingoose.Sheet.toReturn(SHEET({ secret: true }), 'findOne')
      const result = await getSheet('test', (
        CAMPAIGN({ secret: true }, { isParticipant: true })
      ), OWNER)

      expect(result.isEditor).toBe(true)
      expect(result.isOwner).toBe(true)
      expect(result.isVisible).toBe(true)

      done()
    })
    it('sheet exists | secret campaign + sheet | campaign editor', async done => {
      mockingoose.Sheet.toReturn(SHEET({ secret: true }), 'findOne')
      const result = await getSheet('test', (
        CAMPAIGN({ secret: true }, { isEditor: true, isParticipant: true })
      ), EDITOR)

      expect(result.isEditor).toBe(false)
      expect(result.isOwner).toBe(false)
      expect(result.isVisible).toBe(false)

      done()
    })
    it('sheet exists | secret campaign + sheet | campaign owner', async done => {
      mockingoose.Sheet.toReturn(SHEET({ secret: true }), 'findOne')
      const result = await getSheet('test', (
        CAMPAIGN({ secret: true }, { isEditor: true, isOwner: true, isParticipant: true })
      ), EDITOR)

      expect(result.isEditor).toBe(true)
      expect(result.isOwner).toBe(true)
      expect(result.isVisible).toBe(true)

      done()
    })
  })
  describe('permissions', () => {
    it('passes for Admin users', async done => {
      mockingoose.Sheet.toReturn(SHEET(), 'findOne')
      const request = mockRequest('test', {
        campaign: CAMPAIGN({}, { isAdmin: true }),
        user: ADMIN,
      })
      const response = mockResponse()
      const next = jest.fn()
      await permissions('edit')(request, response, next)

      expect(response.status).not.toHaveBeenCalled()
      expect(next).toHaveBeenCalled()

      done()
    })
    it('returns 401 to non-viewers if required', async done => {
      mockingoose.Sheet.toReturn(SHEET(), 'findOne')
      const request = mockRequest('test', { campaign: CAMPAIGN({ secret: true }) })
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
      await permissions('edit')(mockRequest('test', { user: PLAYER }), response, next)

      expect(response.status).toHaveBeenCalledWith(401)
      expect(response.json.mock.calls[0][0].message).toMatch(/You do not have permission to edit/)
      expect(next).not.toHaveBeenCalled()

      done()
    })
    it('passes for non-owners if sheet is public', async done => {
      mockingoose.Sheet.toReturn(SHEET({ secret: false }), 'findOne')
      const response = mockResponse()
      const next = jest.fn()
      await permissions('view')(mockRequest('test', { user: PLAYER }), response, next)

      expect(response.json).not.toHaveBeenCalled()
      expect(response.status).not.toHaveBeenCalled()
      expect(next).toHaveBeenCalled()

      done()
    })
  })
  describe('getSheetRequest', () => {
    it('returns 404 if sheet is not found', async done => {
      const response = mockResponse()
      await getSheetRequest({ sheet: {}, slug: 'test', subdomain: 'test' }, response)

      expect(response.status).toHaveBeenCalledWith(404)
      expect(response.json.mock.calls[0][0].message).toMatch(/Unable to find sheet/)

      done()
    })
    it('returns article if found', async done => {
      const sheet = SHEET()
      const response = mockResponse()

      await getSheetRequest({ sheet }, response)
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
        sheet: SHEET(),
        slug: 'foo',
        user: OWNER,
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
