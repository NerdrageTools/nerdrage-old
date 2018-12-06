/* eslint-disable no-console,no-underscore-dangle */
module.exports = async () => {
  console.log('Teardown mongod')
  await global.MONGOD.stop()
}
/* eslint-enable no-console,no-underscore-dangle */
