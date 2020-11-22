/** @jest-environment node */
import { password } from '~/testing/user-fixtures'
import { Users } from './User'

test('default fields are correctly hydrated', async () => {
	const user = (await Users.findOne({ email: 'foo@nunya.com' }))!
	expect(user.createdAt).toBeTruthy()
	expect(Array.from(user.favorites!)).toEqual([])
	expect(user.isAdmin).toBe(false)
	expect(user.lastLogin).toBe(null)
})

test('email & username must be unique', async () => {
	try {
		await Users.create({ email: 'foo@nunya.com', name: 'Qux', password, username: 'qux' })
	} catch (error) { // eslint-disable-next-line
		expect(error.message).toMatch(/dup key:.*email:/)
	}
	try {
		await Users.create({ email: 'qux@nunya.com', name: 'Qux', password, username: 'foo' })
	} catch (error) { // eslint-disable-next-line
		expect(error.message).toMatch(/dup key:.*username:/)
	}

	expect.assertions(2)
})

test('password match works', async () => {
	const user = await Users.findOne({ username: 'foo' }, { password: 1 })
	expect(user?.password).not.toBe(password)
	expect(user?.comparePassword(password)).toBe(true)
})

describe('search', () => {
	test('search regex matches on username or name', async () => {
		expect(await Users.search(/foo/i)).toHaveLength(1)
		expect(await Users.search(/ba/i)).toHaveLength(2)
	})

	test('search only matches email addresses exactly', async () => {
		expect(await Users.search(/nunya/)).toHaveLength(0)
		expect(await Users.search(/foo@bar.com/)).toHaveLength(0)
		expect(await Users.search('@nunya')).toHaveLength(0)
		expect(await Users.search('foo@nunya.com')).toHaveLength(1)
	})
})
