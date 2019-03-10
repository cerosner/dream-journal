const Sequelize = require('sequelize')
const db = require('../db')

const Keyword = db.define('keyword', {
  word: {
    type: Sequelize.STRING
  }
})

module.exports = Keyword
