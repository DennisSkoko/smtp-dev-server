'use strict'

const { SMTPServer } = require('smtp-server')

module.exports = ({ logger, settings, save }) => {
  const options = Object.assign({}, settings.smtp, {
    onAuth: (auth, session, callback) => {
      callback(null, { user: true })
    },

    onData: (stream, session, callback) => save(stream)
      .then(() => {
        logger.info('Received a mail and successfully save it')
        callback()
      })
      .catch(err => {
        logger.error('Failed to save the mail', {
          error: err.message
        })

        callback(err)
      })
  })

  return new SMTPServer(options)
}
