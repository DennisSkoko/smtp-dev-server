'use strict'

const loader = require('./util/context-loader')

const modules = [
  { path: '../conf/app', name: 'settings' },
  { path: 'context/logger' }
]

const context = loader(modules)
