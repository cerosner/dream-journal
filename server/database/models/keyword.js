const Sequelize = require('sequelize')
const db = require('../db')

const Keyword = db.define('keyword', {
  words: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Keyword
