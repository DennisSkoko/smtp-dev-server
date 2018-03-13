'use strict'

const express = require('express')

module.exports = ({ settings, logger, database }) => {
  const app = express()

  app.set('views', settings.views.path)
  app.set('view engine', settings.views.engine)

  app.get('/', (req, res, next) => {
    database('mails').select('contents')
      .then(emails => emails.map(email => email.contents))
      .then(emails => {
        res.render('mails', { emails })
      })
      .catch(next)
  })

  app.get('/clear', (req, res, next) => {
    database('mails').delete()
      .then(emails => {
        res.redirect('/')
      })
      .catch(next)
  })

  app.use((req, res) => {
    res.status(404).render('not-found')
  })

  app.use((err, req, res, next) => {
    logger.error('Failed to respond to a request', {
      error: err.message
    })

    res.status(500).render('error')
  })

  return app
}
