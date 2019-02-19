const fs = require('fs')
const path = require('path')
const NodeEnvironment = require('jest-environment-node')
const { MongoClient } = require('mongodb')

const globalConfigPath = path.join(__dirname, 'globalConfig.json')

/* eslint-disable no-console,no-underscore-dangle */
module.exports = class MongoEnvironment extends NodeEnvironment {
  async setup() {
    console.log('Setup MongoDB Test Environment')

    const globalConfig = JSON.parse(fs.readFileSync(globalConfigPath, 'utf-8'))

    this.global.MONGO_URI = globalConfig.mongoUri
    this.global.MONGO_DB_NAME = globalConfig.mongoDBName

    const connection = await MongoClient.connect(globalConfig.mongoUri, { useNewUrlParser: true })
    const db = await connection.db(globalConfig.mongoDBName)

    const articles = fs.readdirSync(path.join(__dirname, 'data/articles')).map((file) => {
      const filePath = fs.readFileSync(path.resolve(__dirname, 'data/articles', file))
      return JSON.parse(filePath, { encoding: 'utf-8' })
    })
    db.collection('articles').insertMany(articles)

    connection.close()

    await super.setup()
  }

  async teardown() {
    console.log('Teardown MongoDB Test Environment')

    await super.teardown()
  }

  runScript(script) {
    return super.runScript(script)
  }
}
/* eslint-disable no-console,no-underscore-dangle */
