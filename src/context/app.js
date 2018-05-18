'use strict'

const express = require('express')
const moment = require('moment')

module.exports = ({ settings, logger, database, mailParser }) => {
  const app = express()

  app.set('views', settings.views.path)
  app.set('view engine', settings.views.engine)

  app.get('/', (req, res, next) => {
    database('emails').select().orderBy('id', 'desc')
      .then(emails => Promise.all(
        emails.map(email => mailParser(email.contents)
          .then(parsed => Object.assign(parsed, {
            id: email.id,
            fromNow: moment(parsed.date).fromNow()
          }))
        )
      ))
      .then(emails => {
        res.render('list', { emails })
      })
      .catch(next)
  })

  app.get('/view/:id', (req, res, next) => {
    database('emails').where('id', req.params.id).first()
      .then(email => {
        if (!email) throw new Error('Not-Found')

        return mailParser(email.contents)
          .then(parsed => Object.assign(parsed, {
            id: email.id,
            raw: email.contents
          }))
      })
      .then(email => {
        res.render('view', { email })
      })
      .catch(next)
  })

  app.get('/clear', (req, res, next) => {
    database('emails').delete()
      .then(() => {
        res.redirect('/')
      })
      .catch(next)
  })

  app.use((req, res, next) => {
    next(new Error('Not-Found'))
  })

  app.use((err, req, res, next) => {
    if (err.message === 'Not-Found') {
      return res.status(404).render('not-found')
    }

    logger.error('Failed to respond to a request', {
      error: err.message
    })

    res.status(500).render('error')
  })

  return app
}
