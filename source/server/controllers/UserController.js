import express from 'express'
import NoAnonymous from '@/server/middleware/NoAnonymous'
import Article from '@/server/models/Article'
import Campaign from '@/server/models/Campaign'
import Sheet from '@/server/models/Sheet'
import User from '@/server/models/User'
import omit from '@/utilities/omit'
import pluck from '@/utilities/pluck'

const controller = express()

controller.put('/', async (request, response) => {
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
})

const getFavorites = async user => {
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
controller.get('/favorites', NoAnonymous, async (request, response) => {
  const favorites = await getFavorites(request.user)
  return response.status(200).json(favorites)
})

const getUser = async (request, response) => {
  const { user: currentUser } = request
  const { username } = request.params

  if (username) {
    const targetUser = await User.findOne({ username })
    if (!targetUser) {
      return response.status(404).json({
        message: `Unable to locate a user with username '${username}'.`,
      })
    }

    const json = targetUser.toJSON()

    if (currentUser && currentUser.isAdmin) {
      return response.status(200).json(json)
    }

    return response.status(200).json(
      pluck(json, '_id', 'campaigns', 'createdAt', 'isAdmin', 'lastLogin', 'name', 'username')
    )
  }

  if (!currentUser) {
    return response.status(200).json({ anonymous: true })
  }

  const userId = currentUser._id
  const sheets = await Sheet.find({ ownedBy: userId })
    .populate('campaign', 'domain title')
    .exec()

  const campaigns = await Campaign.find({
    $or: [{ editors: userId }, { owners: userId }, { players: userId }],
  }, { domain: 1, title: 1 })

  try {
    return response.status(200).json({
      ...currentUser.toJSON(),
      campaigns: campaigns || [],
      favorites: await getFavorites(request.user),
      sheets: sheets || [],
    })
  } catch (error) {
    return response.status(500).json({ message: 'Unknown error.' })
  }
}
controller.get('/:username?', getUser)

controller.post('/', NoAnonymous, async (request, response) => {
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
})

const invalidAuthentication = response => {
  response.status(401).json({ message: 'Username/password combination is invalid.' })
}
controller.post('/login', async (request, response) => {
  const { password = '' } = request.body
  const username = (request.body.username || '').toLowerCase().trim()
  const query = { $or: [{ username }, { email: username }] }

  try {
    const user = await User.findOne(query, { password: 1 })
    if (!user) return invalidAuthentication(response)

    const isMatch = await user.comparePassword(password)
    if (isMatch) {
      await user.update({ lastLogin: Date.now() })

      const profile = (await User.findOne(query)).toProfile()
      request.session = profile
      return response.status(200).json(profile)
    }

    return invalidAuthentication(response)
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
    return response.status(500).json({ message: 'Unknown error.' })
  }
})

controller.use('/logoff', async (request, response) => {
  request.session = null
  return response.status(200).json({ message: 'Successfully logged off.' })
})

controller.post('/favorites/:slug', NoAnonymous, async (request, response) => {
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
})

controller.post('/:username', NoAnonymous, async (request, response) => {
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
})

export default controller
