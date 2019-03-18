import express from 'express'
import NoAnonymous from '@/server/middleware/NoAnonymous'
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

controller.get('/:username?', async (request, response) => {
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
    .populate('campaign', 'domain name')
    .exec()

  const campaigns = await Campaign.find({
    $or: [{ editors: userId }, { owners: userId }, { players: userId }],
  }, { domain: 1, name: 1 })

  try {
    return response.status(200).json({
      ...currentUser.toJSON(),
      campaigns: campaigns || [],
      sheets: sheets || [],
    })
  } catch (error) {
    return response.status(500).json({ message: 'Unknown error.' })
  }
})

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
  const verb = user.favorites.includes(favorite) ? '$pull' : '$addToSet'

  await user.update({ [verb]: { favorites: favorite } })

  return response.status(200).json(await User.findOne({ username: user.username }))
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
