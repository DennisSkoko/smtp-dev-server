'use strict'

exports.up = knex => knex.schema.createTable('mails', table => {
  table.increments('id')
  table.text('contents').notNullable()
})

exports.down = knex => knex.schema.dropTable('mails')
