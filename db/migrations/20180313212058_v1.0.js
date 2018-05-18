'use strict'

exports.up = knex => knex.schema.createTable('emails', table => {
  table.increments('id')
  table.text('contents').notNullable()
})

exports.down = knex => knex.schema.dropTable('emails')
