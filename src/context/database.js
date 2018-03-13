'use strict'

const knex = require('knex')

module.exports = ({ settings }) => knex(settings.database)
