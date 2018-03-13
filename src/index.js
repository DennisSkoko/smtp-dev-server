'use strict'

const loader = require('./util/context-loader')

const modules = [
  { path: '../conf/app', name: 'settings' },
  { path: 'context/logger' },
  { path: 'context/database' },
  { path: 'context/save' },
  { path: 'context/smtp' }
]

const ctx = loader(modules)

ctx.smtp.listen(ctx.settings.smtp.port, () => {
  ctx.logger.info('SMTP server has started', {
    port: ctx.settings.smtp.port
  })
})
