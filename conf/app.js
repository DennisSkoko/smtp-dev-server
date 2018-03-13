'use strict'

const path = require('path')

const root = path.resolve(__dirname, '..')

require('dotenv').config({
  path: path.join(root, '.env')
})

module.exports = () => ({
  logger: {
    level: process.env.LOG_LEVEL || 'info'
  }
})
