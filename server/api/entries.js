const router = require('express').Router()
const { Entries, Keywords } = require('../database/models')

router.get('/', (req, res, next) => {
  Entries.findAll({
    include: [{
      model: Keywords
    }]
  })
  .then(entries => res.json(entries))
  .catch(next)
})

router.get('/:entryId', (req, res, next) => {
  Entries.findAll({
    where: {
      id: req.params.entryId
    },
    include: [{
      model: Keywords
    }]
  })
  .then(entry => res.json(entry))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Entries.create(req.body)
  .then(newEntry => res.json(newEntry))
  .catch(next)
})

module.exports = router
