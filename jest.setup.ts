import { Ref } from '@typegoose/typegoose'
import mongoose from 'mongoose'
import { getId } from '~/server/utilities/getId'
import { loadData } from '~/testing/fixtures'

expect.extend({
	toReference<T>(received: Ref<T>, expected: Ref<T>): jest.CustomMatcherResult {
		const receivedId = getId(received)
		const expectedId = getId(expected)
		const pass = receivedId.equals(expectedId)

		return {
			message: () => (pass ? '' : `ID ${expectedId} does not match expected ID ${receivedId}`),
			pass,
		}
	},
})

beforeAll(async () => {
	const { MONGO_URL, TEST_SUITE } = process.env
	const URL = MONGO_URL!.replace('TEST_SUITE', TEST_SUITE ?? 'jest')

	await mongoose.connect(URL, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}, error => {
		if (error) {
			console.error(error) // eslint-disable-line no-console
			process.exit(1)
		}
	})
})

beforeEach(async () => {
	await Promise.all(
		Object.values(mongoose.connection.collections)
			.map(async collection => collection.deleteMany({})),
	)
	await loadData()
})

afterAll(async () => {
	mongoose.disconnect()
})
