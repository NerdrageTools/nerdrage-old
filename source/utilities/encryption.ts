import crypto from 'crypto'
import dotenv from 'dotenv'

dotenv.config()

const ALGORITHM = 'aes-256-cbc'
const KEY = Buffer.from(process.env.CRYPTO_KEY, 'hex')
const IV = Buffer.from(process.env.CRYPTO_IV, 'hex')
const IV_HEX = IV.toString('hex')

export function encrypt(text: string): string {
	const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(KEY), IV)
	let encrypted = cipher.update(text)
	encrypted = Buffer.concat([encrypted, cipher.final()])
	return encrypted.toString('hex')
}

export function decrypt(encryptedData: string): string {
	const iv = Buffer.from(IV_HEX, 'hex')
	const encryptedText = Buffer.from(encryptedData, 'hex')
	const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(KEY), iv)
	let decrypted = decipher.update(encryptedText)
	decrypted = Buffer.concat([decrypted, decipher.final()])
	return decrypted.toString()
}
