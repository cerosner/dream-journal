const express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const db = require('./database/db')

const app = express()

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./api'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public'))
})

app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

db.sync()
.then(() => app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`)
  }))
