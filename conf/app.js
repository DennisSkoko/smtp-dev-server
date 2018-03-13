'use strict'

const path = require('path')

const root = path.resolve(__dirname, '..')

require('dotenv').config({
  path: path.join(root, '.env')
})

module.exports = () => ({
  logger: {
    level: process.env.LOG_LEVEL || 'info'
  },

  database: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: path.join(root, 'res', 'db.sqlite')
    },
    migrations: {
      directory: './db/migrations'
    }
  },

  smtp: {
    port: process.env.SMTP_PORT || 587,
  }
})
