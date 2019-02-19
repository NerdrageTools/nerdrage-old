export default (request, response, next) => {
  request.campaign = request.hostname.split('.').shift()
  next()
}
