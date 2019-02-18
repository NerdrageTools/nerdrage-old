import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

const SALT_WORK_FACTOR = 10

const UserSchema = new mongoose.Schema({
  _id: {
    alias: 'username',
    match: [/^[a-z0-9_-]{1,}$/, 'Invalid Username: only lowercase letters/numbers, _ and -'],
    trim: true,
    type: String,
  },
  email: {
    required: true,
    trim: true,
    type: String,
    validate: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email address',
    ],
  },
  lastLogin: Date,
  name: { trim: true, type: String },
  password: {
    select: false,
    type: String,
    validate: [
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must be at least 8 characters long, with at least 1 uppercase, 1 lowercase, 1 number, and 1 special character.',
    ],
  },
}, {
  timestamps: true,
  versionKey: 'version',
})

UserSchema.pre('save', function beforeUserSave(next) {
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

UserSchema.methods.comparePassword = function comparePassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (error, isMatch) => {
      if (error) reject(error)
      resolve(isMatch)
    })
  })
}
UserSchema.methods.toProfile = function toProfile() {
  return {
    createdAt: this.createdAt,
    name: this.name,
    updatedAt: this.updatedAt,
    username: this.username,
  }
}

export default mongoose.model('User', UserSchema)
