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

  views: {
    path: path.join(root, 'res', 'views'),
    engine: 'pug'
  },

  smtp: {
    port: process.env.SMTP_PORT || 587
  },

  http: {
    port: process.env.HTTP_PORT || 80
  }
})
