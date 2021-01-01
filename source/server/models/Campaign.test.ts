/** @jest-environment node */
import { defaultTheme } from '~/server/models/Theme'

process.env.TEST_SUITE = 'model-Campaign'

test('handlePreSave()', async () => {
	const { main } = global.fixtures.campaigns
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
	const { main } = global.fixtures.campaigns
	const users = global.fixtures.users
	expect(main.isEditableBy(users.sysAdmin)).toBe(true)
	expect(main.isEditableBy(users.owner)).toBe(true)
	expect(main.isEditableBy(users.editor)).toBe(true)
	expect(main.isEditableBy(users.player)).toBe(false)
	expect(main.isEditableBy(users.other)).toBe(false)
})

test('isMember()', () => {
	const { main } = global.fixtures.campaigns
	const users = global.fixtures.users
	expect(main.isMember(users.sysAdmin)).toBe(false)
	expect(main.isMember(users.owner)).toBe(true)
	expect(main.isMember(users.editor)).toBe(true)
	expect(main.isMember(users.player)).toBe(true)
	expect(main.isMember(users.other)).toBe(false)
})

test('isOwnedBy()', () => {
	const { main } = global.fixtures.campaigns
	const users = global.fixtures.users
	expect(main.isOwnedBy(users.sysAdmin)).toBe(true)
	expect(main.isOwnedBy(users.owner)).toBe(true)
	expect(main.isOwnedBy(users.editor)).toBe(false)
	expect(main.isOwnedBy(users.player)).toBe(false)
	expect(main.isOwnedBy(users.other)).toBe(false)
})

test('isVisibleTo()', () => {
	const { main } = global.fixtures.campaigns
	const users = global.fixtures.users
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
