/** @jest-environment node */
import { DocumentType } from '@typegoose/typegoose'
import { Campaign } from '~/server/models/Campaign'
import { defaultTheme } from '~/server/models/Theme'
import { User } from '~/server/models/User'
import { cleanData, loadData } from '~/testing/fixtures'

process.env.TEST_SUITE = 'model-Campaign'

beforeEach(async () => {
	await cleanData()
	await loadData()
})

test('handlePreSave()', async () => {
	// @ts-expect-error - global.fixtures
	const { main } = global.fixtures.campaigns as Record<string, DocumentType<Campaign>>
	const handlePreSave = jest.spyOn(main, 'handlePreSave')
	const handlePreValidate = jest.spyOn(main, 'handlePreValidate')

	main.set({
		sources: [...main.sources || [], ...main.sources || []],
		subdomain: 'MaIn',
	})
	expect(main.sources).toHaveLength(2)
	expect(main.subdomain).toEqual('MaIn')

	await main.save()
	expect(handlePreValidate).toHaveBeenCalledTimes(1)
	expect(handlePreSave).toHaveBeenCalledTimes(1)
	expect(main.theme).toMatchObject(defaultTheme)
	expect(main.sources).toHaveLength(1)
	expect(main.subdomain).toEqual('main')
})

test('isEditableBy()', () => {
	// @ts-expect-error - global.fixtures
	const { main } = global.fixtures.campaigns as Record<string, DocumentType<Campaign>>
	// @ts-expect-error - global.fixtures
	const users = global.fixtures.users as Record<string, DocumentType<User>>
	expect(main.isEditableBy(users.sysAdmin)).toBe(true)
	expect(main.isEditableBy(users.owner)).toBe(true)
	expect(main.isEditableBy(users.editor)).toBe(true)
	expect(main.isEditableBy(users.player)).toBe(false)
	expect(main.isEditableBy(users.other)).toBe(false)
})

test('isMember()', () => {
	// @ts-expect-error - global.fixtures
	const { main } = global.fixtures.campaigns as Record<string, DocumentType<Campaign>>
	// @ts-expect-error - global.fixtures
	const users = global.fixtures.users as Record<string, DocumentType<User>>
	expect(main.isMember(users.sysAdmin)).toBe(false)
	expect(main.isMember(users.owner)).toBe(true)
	expect(main.isMember(users.editor)).toBe(true)
	expect(main.isMember(users.player)).toBe(true)
	expect(main.isMember(users.other)).toBe(false)
})

test('isOwnedBy()', () => {
	// @ts-expect-error - global.fixtures
	const { main } = global.fixtures.campaigns as Record<string, DocumentType<Campaign>>
	// @ts-expect-error - global.fixtures
	const users = global.fixtures.users as Record<string, DocumentType<User>>
	expect(main.isOwnedBy(users.sysAdmin)).toBe(true)
	expect(main.isOwnedBy(users.owner)).toBe(true)
	expect(main.isOwnedBy(users.editor)).toBe(false)
	expect(main.isOwnedBy(users.player)).toBe(false)
	expect(main.isOwnedBy(users.other)).toBe(false)
})

test('isVisibleTo()', () => {
	// @ts-expect-error - global.fixtures
	const { main } = global.fixtures.campaigns as Record<string, DocumentType<Campaign>>
	// @ts-expect-error - global.fixtures
	const users = global.fixtures.users as Record<string, DocumentType<User>>
	main.secret = false
	expect(main.isVisibleTo(users.sysAdmin)).toBe(true)
	expect(main.isVisibleTo(users.owner)).toBe(true)
	expect(main.isVisibleTo(users.editor)).toBe(true)
	expect(main.isVisibleTo(users.player)).toBe(true)
	expect(main.isVisibleTo(users.other)).toBe(true)

	main.secret = true
	expect(main.isVisibleTo(users.sysAdmin)).toBe(true)
	expect(main.isVisibleTo(users.owner)).toBe(true)
	expect(main.isVisibleTo(users.editor)).toBe(true)
	expect(main.isVisibleTo(users.player)).toBe(true)
	expect(main.isVisibleTo(users.other)).toBe(false)
})
