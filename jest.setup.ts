import mongoose from 'mongoose'
import { cleanData, loadData } from '~/testing/fixtures'
import '~/server/models'

beforeAll(async () => {
	await mongoose.connect(process.env.MONGO_URL!, {
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

beforeEach(async () => loadData())
afterEach(async () => cleanData())

afterAll(() => {
	mongoose.disconnect()
})
