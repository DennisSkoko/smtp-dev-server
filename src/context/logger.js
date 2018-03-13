'use strict'

const winston = require('winston')

module.exports = ({ settings }) => winston.createLogger({
  level: settings.logger.level,
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
})
