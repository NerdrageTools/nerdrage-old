import express from 'express'
import NoAnonymous from '@/server/middleware/NoAnonymous'
import Article from '@/server/models/Article'
import Campaign from '@/server/models/Campaign'
import Sheet from '@/server/models/Sheet'
import User from '@/server/models/User'
import omit from '@/utilities/omit'
import pluck from '@/utilities/pluck'

const controller = express()

const ANONYMOUS = { anonymous: true }

export function invalidAuthentication(response) {
  response.status(401).json({ message: 'Username/password combination is invalid.' })
}

export async function createUser(request, response) {
  try {
    const user = new User({
      ...request.body,
      isAdmin: false,
      lastLogin: Date.now(),
    })
    const profile = (await user.save()).toProfile()
    request.session = profile
    return response.status(200).json(profile)
  } catch (error) {
    switch (error.code) {
      case 11000:
        return response.status(409).json({ message: 'Username or email is already in use.' })
      default:
        console.error(`Error in PUT /api/user: ${error}`) // eslint-disable-line no-console
        return response.status(500).json({ message: error.message || 'Unknown error.' })
    }
  }
}
export async function getUserFavorites(user) {
  const domains = [null]
  const slugs = []
  const map = user.favorites.map(favorite => {
    const [domain, slug] = favorite.split(':')
    if (!domain || !slug) return null

    domains.push(domain)
    slugs.push(slug)

    return { domain, slug }
  }).filter(Boolean)

  const campaigns = await Campaign.find({ domain: domains }, { domain: 1, title: 1 })
  const articles = await Article.find({ slug: slugs }, { campaign: 1, slug: 1, title: 1 })

  return map.map(favorite => {
    const campaign = campaigns.find(c => c.domain === favorite.domain)
      || { _id: null, domain: 'www', title: 'Nerdrage' }
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
export async function getUser(request, response) {
  const { freshLogin = false, params, user: currentUser } = request
  const username = params ? params.username : freshLogin

  if (username) {
    const targetUser = await User.findOne({ username })
    if (!targetUser) {
      response.status(404).json({
        message: `Unable to locate a user with username '${username}'.`,
      })
      return ANONYMOUS
    }

    const json = targetUser.toJSON()
    if (freshLogin) {
      return json
    }
    if (currentUser && currentUser.isAdmin) {
      response.status(200).json(json)
      return json
    }

    const user = pluck(json,
      '_id', 'campaigns', 'createdAt', 'isAdmin', 'lastLogin', 'name', 'username'
    )
    response.status(200).json(user)
    return user
  }

  if (!currentUser) {
    response.status(200).json(ANONYMOUS)
    return ANONYMOUS
  }

  const userId = currentUser._id
  const sheets = await Sheet.find({ ownedBy: userId })
    .populate('campaign', 'domain title')
    .exec()

  const campaigns = await Campaign.find({
    $or: [{ editors: userId }, { owners: userId }, { players: userId }],
  }, { domain: 1, title: 1 })

  try {
    const user = {
      ...currentUser.toJSON(),
      campaigns: campaigns || [],
      favorites: await getUserFavorites(request.user),
      sheets: sheets || [],
    }
    response.status(200).json(user)
    return user
  } catch (error) {
    console.error('UserController#getUser', error) // eslint-disable-line no-console
    return response.status(500).json({ message: 'Unknown error.' })
  }
}
export async function getCurrentUserFavorites(request, response) {
  return response.status(200).json(await getUserFavorites(request.user))
}
export async function logIn(request, response) {
  const { password = '' } = request.body
  const username = (request.body.username || '').toLowerCase().trim()
  const query = { $or: [{ username }, { email: username }] }

  try {
    const user = await User.findOne(query, { password: 1 })
    if (!user) return invalidAuthentication(response)

    const isMatch = await user.comparePassword(password)
    if (isMatch) {
      await User.updateOne({ _id: user._id }, { lastLogin: Date.now() })
      const loadedUser = await getUser({ freshLogin: username })
      request.session = loadedUser || null
      return response.status(200).json(loadedUser)
    }

    return invalidAuthentication(response)
  } catch (error) {
    console.error('UserController#logIn error:', error) // eslint-disable-line no-console
    return response.status(500).json({ message: 'Unknown error.' })
  }
}
export async function logOff(request, response) {
  request.session = null
  request.user = null
  return getUser(request, response)
}
export async function updateCurrentUser(request, response) {
  const { user } = request
  try {
    const updates = omit(request.body, '_id', 'createdAt', 'lastLogin', 'updatedAt', 'version')
    if (!user.isAdmin) {
      delete updates.isAdmin
    }
    Object.assign(user, updates)

    const updated = await user.save()
    Object.assign(request.session, updated.toProfile())
    return response.status(200).json(updated.toProfile())
  } catch (error) {
    if (error.code === 11000) {
      return response.status(409).json({ message: 'Username or email is already in use.' })
    }
    if (error.name === 'ValidationError') {
      return response.status(409).json({ message: error.message })
    }

    console.error(`Error in POST /api/user: ${error.code}: ${error}`) // eslint-disable-line no-console
    return response.status(500).json({ message: 'Unknown error.' })
  }
}
export async function updateCurrentUserFavorites(request, response) {
  const { domain, params: { slug }, user } = request
  const favorite = `${domain}:${slug}`
  let { favorites } = user

  let verb
  if (favorites.includes(favorite)) {
    verb = '$pull'
    favorites = favorites.filter(f => f !== favorite)
  } else {
    verb = '$addToSet'
    favorites.push(favorite)
    favorites.sort()
  }

  await user.updateOne({ [verb]: { favorites: favorite } })
  user.favorites = favorites

  return getUser(request, response)
}
export async function updateUser(request, response) {
  try {
    if (request.session.username === request.params.username) {
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

controller.post('/auth/login', logIn)
controller.use('/auth/logoff', logOff)
controller.get('/my/favorites', NoAnonymous, getCurrentUserFavorites)
controller.get('/:username?', getUser)
controller.put('/', createUser)
controller.post('/', NoAnonymous, updateCurrentUser)
controller.post('/my/favorites/:slug', NoAnonymous, updateCurrentUserFavorites)
controller.post('/:username', NoAnonymous, updateUser)

export default controller
