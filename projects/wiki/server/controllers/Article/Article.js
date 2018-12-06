export default class Article {
  static defaults = {
    aliases: [],
    campaign: '',
    data: {},
    slug: '',
    tags: [],
    title: '',
  }

  static findOne = async (db, { campaign, slug }) => {
    const data = db.collection('articles').findOne({ campaign, slug })
    return new Article(db, data)
  }

  db = null

  constructor(db, data) {
    this.db = db
    this.data = { ...Article.defaults, ...data }
  }
}
