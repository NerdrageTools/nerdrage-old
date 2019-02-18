import express from 'express'

export default express()
  .get('/:slug', async (request, response) => {
    const { db, params } = request

    const article = await db.collection('articles').findOne(params) || {}
    return response.status(200).json(article)
  })
