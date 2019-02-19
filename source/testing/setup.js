const fs = require('fs')
const path = require('path')
const MongodbMemoryServer = require('mongodb-memory-server').default

const globalConfigPath = path.join(__dirname, 'globalConfig.json')

const mongod = new MongodbMemoryServer({
  autoStart: false,
  binary: { version: '3.2.18' },
  instance: { dbName: 'jest' },
})

/* eslint-disable no-console,no-underscore-dangle */
module.exports = async () => {
  if (!mongod.isRunning) {
    await mongod.start()
  }

  const mongoConfig = {
    mongoDBName: 'jest',
    mongoUri: await mongod.getConnectionString(),
  }

  // Write global config to disk because all tests run in different contexts.
  fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig))
  console.log('Config is written')

  // Set reference to mongod in order to close the server during teardown.
  global.MONGOD = mongod
  process.env.MONGO_URL = mongoConfig.mongoUri
}
/* eslint-disable no-console,no-underscore-dangle */
