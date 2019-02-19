export default (request, response, next) => {
  if (!request.session.username) {
    response.status(401).send({
      message: 'You must be logged in to perform this action.',
    })
    return
  }

  next()
}
