import express from 'express'
import ByCampaign from '@/server/middleware/ByCampaign'
import NoAnonymous from '@/server/middleware/NoAnonymous'
import User from '@/server/models/User'

const controller = express()

controller.put('/', async (request, response) => {
  try {
    const user = new User({
      ...request.body,
      isAdmin: false,
      lastLogin: undefined,
    })
    const updated = await user.save()
    return response.status(200).json(updated.toProfile())
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

controller.get('/', async (request, response) => {
  if (!request.session.username) {
    return response.status(200).json({ anonymous: true })
  }

  try {
    const user = await User.findOne({ username: request.session.username })
    return response.status(200).json(user)
  } catch (error) {
    return response.status(500).json({ message: 'Unknown error.' })
  }
})

controller.post('/', NoAnonymous, async (request, response) => {
  try {
    const user = await User.findOne({ username: request.session.username }, { password: 1 })
    if (user.isAdmin) {
      Object.assign(user, request.body)
    } else {
      Object.assign(user, { ...request.body, isAdmin: false })
    }

    const updated = await user.save()
    Object.assign(request.session, updated.toProfile())
    return response.status(200).json(updated)
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

controller.post('/login', async (request, response) => {
  const { username, password } = request.body

  try {
    const user = await User.findOne({ username }, { password: 1 })

    if (!user) {
      return response.status(401).json({ message: 'Username or password is invalid.' })
    }

    const isMatch = await user.comparePassword(password)
    if (isMatch) {
      await user.updateOne({ lastLogin: Date.now() })
      const updated = await User.findOne({ username })

      const profile = updated.toProfile()
      request.session = profile
      return response.status(200).json(profile)
    }

    return response.status(401).json({ message: 'Username or password is invalid.' })
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
    return response.status(500).json({ message: 'Unknown error.' })
  }
})

controller.use('/logoff', async (request, response) => {
  request.session = null
  return response.status(200).json({ message: 'Successfully logged off.' })
})

controller.post('/favorites/:slug', NoAnonymous, ByCampaign, async (request, response) => {
  const { domain, params: { slug }, session: { username } } = request
  const favorite = `${domain}:${slug}`

  const user = await User.findOne({ username })
  const verb = user.favorites.includes(favorite) ? '$pull' : '$addToSet'

  await user.update({ [verb]: { favorites: favorite } })

  return response.status(200).json(await User.findOne({ username }))
})

controller.post('/:username', NoAnonymous, async (request, response) => {
  try {
    if (request.session.username === request.params.username) {
      return response.redirect(302, '/api/users/')
    }

    const currentUser = await User.findOne({ username: request.session.username })
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
