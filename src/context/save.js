'use strict'

module.exports = ({ database }) => mail => new Promise((resolve, reject) => {
  let contents = ''

  mail.on('data', data => {
    contents += data
  })

  mail.on('end', () => {
    database('emails').insert({ contents })
      .then(resolve, reject)
  })
})
