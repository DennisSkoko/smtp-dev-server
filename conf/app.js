'use strict'

const path = require('path')

const root = path.resolve(__dirname, '..')

require('dotenv').config({
  path: path.join(root, '.env')
})

module.exports = () => ({
  port: process.env.PORT || 587,

  logger: {
    level: process.env.LOG_LEVEL || 'info'
  },

  smtp: {}
})
