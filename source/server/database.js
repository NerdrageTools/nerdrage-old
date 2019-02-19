import { MongoClient } from 'mongodb'

export default {
  connect() {
    return new Promise((resolve, reject) => {
      const { DB_HOSTNAME, DB_NAME, DB_PASSWORD, DB_USERNAME } = process.env

      if (this.db) { resolve(this.db) }

      const url = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}/${DB_NAME}?retryWrites=true`
      if (!DB_HOSTNAME || !DB_NAME || !DB_PASSWORD || !DB_USERNAME) {
        throw new Error('Environment variables DB_HOSTNAME, DB_NAME, DB_PASSWORD, and DB_USERNAME are required')
      }

      return MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
        this.db = client.db(DB_NAME)

        if (error) {
          reject(error)
        } else {
          resolve(this.db)
        }
      })
    })
  },
  db: null,
}
