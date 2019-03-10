const router = require('express').Router()
const { Keywords } = require('../database/models')

router.get('/', (req, res, next) => {
  Keywords.findAll()
  .then(keywords => res.json(keywords))
  .catch(next)
})

module.exports = router
