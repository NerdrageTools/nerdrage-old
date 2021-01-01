import type { Ref } from '@typegoose/typegoose'
import mongoose from 'mongoose'

export const getId = (id: number | string | Ref<any>): mongoose.Types.ObjectId => {
	if (id?._bsontype === 'ObjectID') return id
	if (!id) return mongoose.Types.ObjectId()
	if (['string', 'number'].includes(typeof id)) {
		return mongoose.Types.ObjectId(id as string)
	}

	return getId(id?._id)
}
