/* eslint-disable @typescript-eslint/no-unused-vars */
import { Ref } from '@typegoose/typegoose'

declare global {
	namespace jest {
		interface Matchers<R extends Ref<any>> {
			toReference<RefType>(expected: RefType): CustomMatcherResult,
		}
	}
}
