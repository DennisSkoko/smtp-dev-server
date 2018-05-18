'use strict'

const loader = require('./util/context-loader')

const modules = [
  { path: '../conf/app', name: 'settings' },
  { path: 'context/logger' },
  { path: 'context/database' },
  { path: 'context/save' },
  { path: 'context/smtp' },
  { path: 'context/mail-parser', name: 'mailParser' },
  { path: 'context/app' },
  { path: 'context/http' }
]

const ctx = loader(modules)

ctx.smtp.listen(ctx.settings.smtp.port, () => {
  ctx.logger.info('SMTP server has started', {
    port: ctx.settings.smtp.port
  })
})

ctx.http.listen(ctx.settings.http.port, () => {
  ctx.logger.info('HTTP server has started', {
    port: ctx.settings.http.port
  })
})
