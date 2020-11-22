import { Users } from '~/server/models/User'
import users from './user-fixtures'

export const loadData = async (): Promise<void> => {
	await Users.create(users)
}

export const cleanData = async (): Promise<void> => {
	await Users.deleteMany({})
}
