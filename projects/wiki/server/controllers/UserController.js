import express from 'express'
import NoAnonymous from '../middleware/NoAnonymous'
import User from '../models/User'

const controller = express()

controller.put('/', async (request, response) => {
  try {
    const user = new User(request.body)
    const updated = await user.save()
    return response.status(200).send(updated)
  } catch (error) {
    switch (error.code) {
      case 11000:
        return response.status(409).send({ message: 'Username is already in use.' })
      default:
        console.error(`Error in /api/user/create: ${error}`) // eslint-disable-line
        return response.status(500).send({ message: error.message || 'Unknown error.' })
    }
  }
})

controller.get('/', NoAnonymous, async (request, response) => {
  try {
    const user = await User.findById(request.session.username)
    response.status(200).send(user)
  } catch (error) {
    console.error(error)
  }
})

controller.post('/', NoAnonymous, async (request, response) => {
  const user = await User.findById(request.session.username)
  Object.assign(user, request.body)

  const updated = await user.save()

  response.status(200).send(updated)
})

controller.post('/login', async (request, response) => {
  const { username, password } = request.body

  try {
    const user = await User.findOne({ _id: username }, { password: 1 })

    if (!user) {
      response.status(401).send({
        message: 'Username or password is invalid.',
      })
      return
    }

    const isMatch = await user.comparePassword(password)
    if (isMatch) {
      user.update({ lastLogin: Date.now() })

      request.session.username = username
      request.session.name = user.name

      response.status(200).send(user.toProfile())
    } else {
      response.status(401).send({ message: 'Username or password is invalid.' })
    }
  } catch (error) {
    console.error(error)
    response.status(500).send({ message: 'Unknown error.' })
  }
})

export default controller
