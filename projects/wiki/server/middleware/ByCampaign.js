export default (request, response, next) => {
  request.params.campaign = request.hostname.split('.').shift()
  next()
}
