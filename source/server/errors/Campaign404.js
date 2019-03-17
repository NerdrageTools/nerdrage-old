export default (request, response, next) => {
  if (request.campaign) return next()

  return response.status(404).json({
    message: `Campaign '${request.domain}' does not exist.`,
  })
}
