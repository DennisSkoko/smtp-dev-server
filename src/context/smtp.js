'use strict'

const { SMTPServer } = require('smtp-server')

module.exports = ({ settings }) => {
  const options = Object.assign({}, settings.smtp, {
    onAuth (auth, session, callback) {
      callback(null, { user: true })
    },

    onData (stream, session, callback) {
      stream.pipe(process.stdout)
      stream.on('end', callback)
    }
  })

  return new SMTPServer(options)
}
