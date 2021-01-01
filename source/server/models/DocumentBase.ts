/* eslint-disable @typescript-eslint/no-empty-function */
import { DocumentType, modelOptions, pre, prop, Severity } from '@typegoose/typegoose'
import mongoose from 'mongoose'

export interface IDocumentBaseData {
	createdAt?: Date,
	readonly id?: null | string,
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
	@prop({ auto: true, type: mongoose.Types.ObjectId })
	_id?: mongoose.Types.ObjectId

	public get id(): null | string { return this._id ? String(this._id) : null }

	@prop({ type: Date })
	public createdAt?: Date

	@prop({ type: Date })
	public lastUpdatedAt?: Date

	@prop({ default: 0, type: Number })
	version?: number = 0

	public toDocument(): DocumentType<TData> {
		if ((this as unknown as DocumentType<TData>).markModified !== undefined) {
			return this as unknown as DocumentType<TData>
		}

		const Model = mongoose.models[this.constructor.name]
		return new Model({ ...this })
	}

	public toJSON(): TData {
		return this.toDocument().toObject()
	}

	/**
	 * Saves the current instance's data to the server
	 * @param user The user responsible for this change
	 * @returns A promise, which resolves once the save succeeds/fails
	 */
	save = async (): Promise<DocumentBase<TData>> => {
		const doc = this.toDocument()
		const data = await doc.save()
		Object.assign(this, data.toJSON())
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
