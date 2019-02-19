import express from 'express'
import Article from '../models/Article'

const controller = express()

controller.get('/:slug', async (request, response) => {
  const { slug } = request.params

  const article = await Article.findOne({ slug })
  return response.status(200).json(article)
})

export default controller
