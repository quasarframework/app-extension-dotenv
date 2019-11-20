process.env.NODE_ENV = 'production'

const { join } = require('path')
const { createFolder } = require('./utils')
const { green, blue } = require('chalk')

console.log()

require('./script.clean.js')

console.log(` 📦 Building ${green('v' + require('../package.json').version)}...\n`)

createFolder('dist')

require(join(__dirname, './script.javascript'))
