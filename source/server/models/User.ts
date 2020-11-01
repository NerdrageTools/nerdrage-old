import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import { computeSearchKeys } from '~/utilities/computeSearchKeys'

const SALT_WORK_FACTOR = 10

interface IUserJSON {
	email: string,
	favorites: string[],
	isAdmin: boolean,
	lastLogin: Date,
	name: string,
	password: string,
	searchKeys: string[],
	username: string,
}

export interface IUser extends mongoose.Document, IUserJSON {
	comparePassword: (password: string) => Promise<boolean>,
	toProfile: () => IUserJSON,
}

const Schema = new mongoose.Schema<IUser>({
	email: {
		required: true,
		trim: true,
		type: String,
		unique: true,
		validate: [
			// eslint-disable-next-line max-len
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Invalid email address',
		],
	},
	favorites: [String],
	isAdmin: { default: false, type: Boolean },
	lastLogin: Date,
	name: { trim: true, type: String },
	password: {
		select: false,
		type: String,
		validate: [
			/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
			// eslint-disable-next-line max-len
			'Password must be at least 8 characters long, with at least 1 uppercase, 1 lowercase, 1 number, and 1 special character.',
		],
	},
	searchKeys: { select: false, type: [String] },
	username: {
		match: [/^[a-z0-9_-]{4,}$/, 'Invalid Username: only lowercase letters/numbers, _ and -'],
		required: true,
		trim: true,
		type: String,
		unique: true,
	},
}, {
	id: false,
	timestamps: true,
	versionKey: 'version',
})

Schema.index({ username: 'text' })
Schema.pre<IUser>('save', function (next) {
	if (this.email) this.email = this.email.toLowerCase().trim()
	if (this.username) this.username = this.username.toLowerCase().trim()

	const searchable = `${this.username} ${this.name}`
	this.searchKeys = computeSearchKeys(searchable)

	if (!this.isModified('password')) { next(); return }
	bcrypt.genSalt(SALT_WORK_FACTOR, (saltError, salt) => {
		if (saltError) { next(saltError); return }

		bcrypt.hash(this.password, salt, (hashError, hash) => {
			if (hashError) { next(hashError); return }

			this.password = hash
			next()
		})
	})
})

Schema.methods.comparePassword = function (password) {
	return new Promise((resolve, reject) => {
		bcrypt.compare(password, this.password, (error, isMatch) => {
			if (error) reject(error)
			resolve(isMatch)
		})
	})
}
Schema.methods.toProfile = function toProfile(): IUserJSON {
	return {
		...Object.keys(this.toJSON() as IUserJSON).reduce((all, key) => {
			if (key !== 'password') {
				return { ...all, [key]: this[key as keyof IUserJSON] }
			}
			return all
		}, {}),
		username: this.username,
	} as IUserJSON
}

export const User = mongoose.model<IUser>('User', Schema)
