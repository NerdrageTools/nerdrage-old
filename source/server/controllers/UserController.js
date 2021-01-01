import express from 'express'
import NoAnonymous from '@/server/middleware/NoAnonymous'
import Article from '@/server/models/Article'
import Campaign from '@/server/models/Campaign'
import Sheet from '@/server/models/Sheet'
import User from '@/server/models/User'
import { decrypt, encrypt } from '@/utilities/encryption'
import omit from '@/utilities/omit'
import pluck from '@/utilities/pluck'

const controller = express()

const ANONYMOUS = { anonymous: true }

/* eslint-disable no-console */
export function invalidAuthentication(response) {
	response.status(401).json({ message: 'Username/password combination is invalid.' })
}

export function readCookie(request) {
	if (!request || !request.cookies || !request.cookies.session) {
		return null
	}
	try {
		return JSON.parse(decrypt(request.cookies.session))
	} catch {
		return null
	}
}

export function setCookie(response, username, domain) {
	response.cookie(
		'session',
		encrypt(JSON.stringify({
			timestamp: (new Date()).getMilliseconds(),
			username,
		})),
		{ domain, httpOnly: true },
	)
}

export function clearCookie(request, response) {
	response.cookie('session', '', { domain: request.domain, maxAge: 0 })
}

export async function createUser(request, response) {
	try {
		const user = new User({
			...request.body,
			isAdmin: false,
			lastLogin: Date.now(),
		})
		await user.save()

		setCookie(response, user.username, request.domain)
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
export async function getUserFavorites(user) {
	const subdomains = [null]
	const slugs = []
	const map = user.favorites.map(favorite => {
		const [subdomain, slug] = favorite.split(':')
		if (!subdomain || !slug) return null

		slugs.push(slug)
		subdomains.push(subdomain)

		return { slug, subdomain }
	}).filter(Boolean)

	const campaigns = await Campaign.find({ subdomain: subdomains }, { subdomain: 1, title: 1 })
	const articles = await Article.find({ slug: slugs }, { campaign: 1, slug: 1, title: 1 })

	return map.map(favorite => {
		const campaign = campaigns.find(c => c.subdomain === favorite.subdomain)
			|| { _id: null, subdomain: 'www', title: 'Nerdrage' }
		const article = articles.find(a => a.slug === favorite.slug && a.campaign === campaign._id)
			|| articles.find(a => a.slug === favorite.slug)
			|| {}

		return {
			campaign,
			slug: favorite.slug,
			title: article.title || favorite.slug,
		}
	})
}
export async function getUser(username, populated = false) {
	try {
		const user = await User.findOne({ username })
		if (!user) return ANONYMOUS

		const json = user.toJSON()
		if (!populated) {
			return pluck(json,
				'_id', 'campaigns', 'createdAt', 'isAdmin',
				'lastLogin', 'name', 'username',
			)
		}

		json.sheets = await Sheet.find({ ownedBy: user._id }, { slug: 1, title: 1 })
			.sort({ title: 1 })
			.populate('campaign', 'subdomain title').exec()

		json.campaigns = await Campaign.find({
			$or: [
				{ editors: json._id },
				{ owners: json._id },
				{ players: json._id },
			],
		}, { subdomain: 1, title: 1 })

		json.favorites = await getUserFavorites(user) || []
		return json
	} catch (error) {
		console.error('UserController#getUser', error.message)
		return ANONYMOUS
	}
}
export async function getUserRequest(request, response) {
	const { params: { username }, user: currentUser = {} } = request
	if (username && username !== currentUser.username) {
		const populated = Boolean(currentUser.isAdmin || currentUser.username === username)
		const user = await getUser(username, populated)

		if (!user) {
			return response.status(404).json({
				message: `Unable to locate a user with username '${username}'.`,
			})
		}

		return response.status(200).json(user)
	}

	if (!currentUser || !currentUser._id) {
		return response.status(404).json({
			message: `Unable to locate a user with username '${username}'.`,
		})
	}

	return response.status(200).json(currentUser)
}
export async function getCurrentUserFavorites(request, response) {
	return response.status(200).json(await getUserFavorites(request.user))
}
export async function logIn(request, response) {
	const { password = '' } = request.body
	const username = (request.body.username || '').toLowerCase().trim()
	const query = { $or: [{ username }, { email: username }] }

	try {
		const user = await User.findOne(query, { password: 1, username: 1 })
		if (!user) return invalidAuthentication(response)

		const isMatch = await user.comparePassword(password)
		if (isMatch) {
			await User.updateOne({ _id: user._id }, { lastLogin: Date.now() })
			const loadedUser = await getUser(user.username, true)
			setCookie(response, loadedUser.username, request.domain)
			return response.status(200).json(loadedUser)
		}

		return invalidAuthentication(response)
	} catch (error) {
		console.error('UserController#logIn error:', error)
		return response.status(500).json({ message: 'Unknown error.' })
	}
}
export async function logOff(request, response) {
	clearCookie(request, response)
	request.user = null
	return response.status(200).json({ anonymous: true })
}
export async function updateCurrentUser(request, response) {
	const { user } = request
	try {
		const updates = omit(
			request.body,
			'_id', 'createdAt', 'favorites', 'lastLogin', 'updatedAt', 'version',
		)
		if (!user.isAdmin) {
			delete updates.isAdmin
		}
		Object.assign(user, updates)

		const updated = await user.save()
		Object.assign(request.user, updated.toProfile())
		return response.status(200).json(updated.toProfile())
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
	const { favorites: rawFavorites } = await User.findOne({ username }, { favorites: 1 })
	const verb = rawFavorites.includes(favorite) ? '$pull' : '$addToSet'

	await User.updateOne({ username }, { [verb]: { favorites: favorite } })
	request.user = await getUser(username, true)
	return getUserRequest(request, response)
}
export async function updateUser(request, response) {
	try {
		if (request.user.username === request.params.username) {
			return response.redirect(307, '/api/user/')
		}

		const currentUser = request.user
		if (!currentUser.isAdmin) {
			return response.status(401).json({
				message: 'You must be an administrator to edit another user.',
			})
		}

		const targetUser = await User.findOne({ username: request.params.username })
		if (!targetUser) {
			return response.status(404).json({
				message: `No such user: '${request.params.username}'.`,
			})
		}

		Object.assign(targetUser, request.body)

		const updated = await targetUser.save()
		return response.status(200).json(updated)
	} catch (error) {
		return response.status(500).json({
			message: 'Unknown error. Please try again.',
		})
	}
}
/* eslint-enable no-console */

controller.post('/auth/login', logIn)
controller.use('/auth/logoff', logOff)
controller.get('/my/favorites', NoAnonymous, getCurrentUserFavorites)
controller.get('/:username?', getUserRequest)
controller.put('/', createUser)
controller.post('/', NoAnonymous, updateCurrentUser)
controller.post('/my/favorites/:slug', NoAnonymous, updateCurrentUserFavorites)
controller.post('/:username', NoAnonymous, updateUser)

export default controller
