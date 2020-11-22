import express, { IRequest, Response } from 'express'
import { NoAnonymous } from '~/server/middleware/NoAnonymous'
import { IUserData, IUserProfile, Users } from '~/server/models'
import { IArticleLink } from '~/server/schema/IArticle'
import { IUser } from '~/server/schema/IUser'
import { decrypt, encrypt } from '~/utilities/encryption'
import { pluck } from '~/utilities/pluck'

const controller = express()

interface ISession {
	timestamp: number,
	username: string,
}

export function readCookie(request: IRequest): ISession | null {
	if (!request || !request.cookies || !request.cookies.session) {
		return null
	}
	try {
		return JSON.parse(decrypt(request.cookies.session)) as ISession
	} catch {
		return null
	}
}
export function setCookie(request: IRequest, response: Response): void {
	const timestamp = (new Date()).getMilliseconds()
	const cookie = encrypt(JSON.stringify({ timestamp, username: request.user?.username }))
	response.cookie('session', cookie, { domain: request.domainName, httpOnly: true })
}
export function clearCookie(request: IRequest, response: Response): void {
	response.cookie('session', '', { domain: request.domainName, httpOnly: true, maxAge: 0 })
}

export async function createUser(request: IRequest, response: Response): Promise<Response> {
	try {
		const user = new UserSchema({
			...request.body as Partial<IUser>,
			isAdmin: false,
			lastLogin: Date.now(),
		})
		await user.save()

		request.user = await user.toProfile()
		setCookie(request, response)
		return response.status(200).json(user)
	} catch (error) {
		switch (error.code) {
			case 11000:
				return response.status(409).json({ message: 'Username or email is already in use.' })
			default:
				console.error(`Error in PUT /api/user: ${error}`)
				return response.status(500).json({ message: error.message || 'Unknown error.' })
		}
	}
}
export async function getUserFavorites(user: IUserData): Promise<IArticleLink[]> {
	const profile = await (await Users.findOne({ _id: user._id }))?.toProfile(true)
	return profile?.favorites ?? []
}
export async function getUser(username: string, populated: boolean = false)
	: Promise<IUserProfile | null> {
	return (await Users.findOne({ username }))?.toProfile(populated) ?? null
}
export async function getUserRequest(request: IRequest, response: Response): Promise<Response> {
	const username = request.params?.username
	const currentUser = request.user

	if (username && username !== currentUser?.username) {
		// const populated = Boolean(currentUser.isAdmin || currentUser.username === username)
		const user = await Users.findOne({ username }) // await getUser(username, populated)

		if (!user) {
			return response.status(404).json({
				message: `Unable to locate a user with username '${username}'.`,
			})
		}

		return response.status(200).json(await user.toProfile())
	}

	if (!currentUser || !currentUser._id) {
		return response.status(404).json({
			message: `Unable to locate a user with username '${username}'.`,
		})
	}

	return response.status(200).json(currentUser)
}
export async function getCurrentUserFavorites(request: IRequest, response: Response)
	: Promise<Response> {
	return response.status(200).json(request.user?.favorites)
}
export async function logIn(request: IRequest, response: Response): Promise<Response> {
	const { password = '' } = request.body
	const username = (request.body.username || '').toLowerCase().trim()
	const query = { $or: [{ username }, { email: username }] }

	try {
		const user = await Users.findOne(query, { password: 1, username: 1 })
		const isMatch = await user?.comparePassword(password)

		if (!user || !isMatch) {
			return response.status(401).json({ message: 'Username/password combination is invalid.' })
		}

		await user.set('lastLogin', Date.now()).save()
		request.user = await user.toProfile()
		setCookie(request, response)
		return response.status(200).json(await user.toProfile())
	} catch (error) {
		console.error('UserController#logIn error:', error)
		return response.status(500).json({ message: 'Unknown error.' })
	}
}
export async function logOff(request: IRequest, response: Response): Promise<Response> {
	clearCookie(request, response)
	request.user = null
	return response.status(200).json(null)
}
export async function updateCurrentUser(request: IRequest, response: Response): Promise<Response> {
	const currentUser = await Users.findOne({ _id: request?.user?._id })
	if (!currentUser) {
		return response.status(404).json({ message: 'You must be logged in to edit your profile.' })
	}

	try {
		const updates = pluck(request.body, 'email', 'isAdmin', 'name', 'password', 'username')
		if (!currentUser.isAdmin) { delete updates.isAdmin }

		Object.assign(currentUser, updates)
		await currentUser.save()
		const profile = await currentUser.toProfile()
		Object.assign(request.user, profile)
		return response.status(200).json(profile)
	} catch (error) {
		if (error.code === 11000) {
			return response.status(409).json({ message: 'Username or email is already in use.' })
		}
		if (error.name === 'ValidationError') {
			return response.status(409).json({ message: error.message })
		}

		console.error(`Error in POST /api/user: ${error.code}: ${error}`)
		return response.status(500).json({ message: 'Unknown error.' })
	}
}
export async function updateCurrentUserFavorites(request, response) {
	const { params: { slug }, subdomain, user: { username } } = request
	const favorite = `${subdomain}:${slug}`
	const { favorites: rawFavorites } = await Users.findOne({ username }, { favorites: 1 })
	const verb = rawFavorites.includes(favorite) ? '$pull' : '$addToSet'

	await Users.updateOne({ username }, { [verb]: { favorites: favorite } })
	request.user = await getUser(username, true)
	return getUserRequest(request, response)
}
export async function updateUser(request: IRequest, response: Response): Promise<Response | void> {
	try {
		const username: string = request.params?.username
		const currentUser = request.user
		if (currentUser?.username === username) {
			return response.redirect(307, '/api/user')
		}

		if (!currentUser?.isAdmin) {
			return response.status(401).json({
				message: 'You must be an administrator to edit another user.',
			})
		}

		const targetUser = await Users.findOne({ username })
		if (!targetUser) {
			return response.status(404).json({ message: `No such user: '${username}'.` })
		}

		Object.assign(targetUser, request.body)

		await targetUser.save()
		return response.status(200).json(await targetUser.toProfile())
	} catch (error) {
		return response.status(500).json({ message: 'Unknown error. Please try again.' })
	}
}

controller.post('/auth/login', logIn)
controller.use('/auth/logoff', logOff)
controller.get('/my/favorites', NoAnonymous, getCurrentUserFavorites)
controller.get('/:username?', getUserRequest)
controller.put('/', createUser)
controller.post('/', NoAnonymous, updateCurrentUser)
controller.post('/my/favorites/:slug', NoAnonymous, updateCurrentUserFavorites)
controller.post('/:username', NoAnonymous, updateUser)

export default controller
