const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const app = express()
const morgan = require('morgan')

// middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
// utils

// init routes 

// hanlding errors

app.get('/', function (req, res) {
  return res.status(200).json({ })

})

module.exports = app