export default (request, response, next) => {
  if (request.session.username) {
    request.session.lastRequest = (new Date()).getMilliseconds()
  }

  next()
}
