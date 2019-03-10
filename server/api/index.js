const router = require('express').Router()

router.use('/entries', require('./entries'))
router.use('/keywords', require('./keywords'))

router.use((req, res, next) => {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})

module.exports = router
