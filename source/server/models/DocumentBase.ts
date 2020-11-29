/* eslint-disable @typescript-eslint/no-empty-function */
import { modelOptions, mongoose, pre, prop, Severity } from '@typegoose/typegoose'

export interface IDocumentBaseData {
	createdAt?: Date,
	id?: mongoose.Schema.Types.ObjectId,
	lastUpdatedAt?: Date,
	version?: number,
}

@pre<DocumentBase>('validate', function () { this.handlePreValidate.apply(this) })
@pre<DocumentBase>('save', function () { this.handlePreSave.apply(this) })
@modelOptions({
	options: { allowMixed: Severity.ALLOW },
	schemaOptions: { id: true, timestamps: true, versionKey: 'version' },
})
export abstract class DocumentBase<
	TData extends IDocumentBaseData = IDocumentBaseData
> {
	@prop({ auto: true, type: mongoose.Schema.Types.ObjectId })
	id?: mongoose.Schema.Types.ObjectId

	@prop({ type: Date })
	createdAt?: Date

	@prop({ type: Date })
	lastUpdatedAt?: Date

	@prop({ default: 0, type: Number })
	version?: number = 0

	constructor(data: TData) {
		Object.assign(this, data)
	}

	/**
	 * Saves the current instance's data to the server
	 * @param user The user responsible for this change
	 * @returns A promise, which resolves once the save succeeds/fails
	 */
	save = async (): Promise<this> => {
		const Model = mongoose.models[this.constructor.name]
		if (Model) {
			const instance = new Model(this)
			const data = await instance.save()
			Object.assign(this, data.toJSON())
		}

		return this
	}

	/**
	 * Pre-Save hook. `this` is bound. Executed just prior to save.
	 * WARNING: DO NOT override with an arrow function, or this will not work
	 */
	handlePreSave(): void { }

	/**
	 * Pre-Validation hook. `this` is bound. Executed just prior to validate.
	 * WARNING: DO NOT override with an arrow function, or this will not work
	 */
	handlePreValidate(): void { }
}
