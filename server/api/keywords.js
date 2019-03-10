const router = require('express').Router()
const { Keywords } = require('../database/models')

router.get('/', (req, res, next) => {
  Keywords.findAll()
  .then(keywords => res.json(keywords))
  .catch(next)
})

// // matches POST requests to /api/puppies/
// router.post('/', function (req, res, next) { /* etc */});
// // matches PUT requests to /api/puppies/:puppyId
// router.put('/:puppyId', function (req, res, next) { /* etc */});
// // matches DELETE requests to /api/puppies/:puppyId
// router.delete('/:puppyId', function (req, res, next) { /* etc */});

module.exports = router
