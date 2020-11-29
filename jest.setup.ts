import mongoose from 'mongoose'

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
})

afterAll(async () => {
	mongoose.disconnect()
})
