const Sequelize = require('sequelize')
const db = require('../db')

const Entry = db.define('entry', {
  content: {
    type: Sequelize.TEXT
  }
})

module.exports = Entry
