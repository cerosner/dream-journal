const router = require('express').Router()
const { Entries } = require('../database/models')

router.get('/', (req, res, next) => {
  Entries.findAll()
  .then(entries => res.json(entries))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Entries.create(req.body)
  .then(newEntry => res.json(newEntry))
  .catch(next)
})

module.exports = router
