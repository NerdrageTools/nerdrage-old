export default (request, response, next) => {
  const host = request.get('host') || ''
  const domain = host.split('.').slice(-2).join('.').split(':')[0]
  request.sessionOptions.domain = domain

  if (request.session.username) {
    request.session.lastRequest = (new Date()).getMilliseconds()
  }
  next()
}
