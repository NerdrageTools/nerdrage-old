export default async (request, response, next) => {
  request.domain = request.hostname.split('.').shift()
  next()
}
