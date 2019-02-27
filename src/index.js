/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */
const
  fs = require('fs'),
  path = require('path')

const extendWithDotenv = function (api, conf) {
  let envName = '.env' // default name

  // get .env name based on dev or production
  if (conf.ctx.dev === true) {
    // your prompt data is in api.prompts
    if (api.prompts.env_development) {
      envName = api.prompts.env_development
    }
  }
  else {
    if (api.prompts.env_production) {
      envName = api.prompts.env_production
    }
  }

  // resolve the path to the file
  let envPath = path.resolve(process.cwd(), envName)

  // check file exists
  if (!fs.existsSync(envPath)) {
    console.error(`App Extension (dotenv): '${envName}' file missing; skipping`)
    return
  }

  // dotenv options
  const envOptions = {
    encoding: 'utf8',
    path: envPath
  }

  const { config } = require('dotenv')
  const result = config(envOptions)

  // check for dotenv error
  if (result.error) {
    console.error(`App Extension (dotenv): Error '${result.error}'`)
    process.exit(1)
  }

  // get parsed data
  const parsed = result.parsed

  // make sure there is a build.env object
  if (!conf.build.env) {
    conf.build.env = {}
  }

  // for brevity
  let target = conf.build.env

  // check for common root object
  if (api.prompts.common_root_object && api.prompts.common_root_object !== 'none') {
    let rootObject = api.prompts.common_root_object

    if (!target[rootObject]) {
      target[rootObject] = {}
      target = target[rootObject]
    }
  }

  for (const key in parsed) {
    target[key] = JSON.stringify(parsed[key])
  }
}

module.exports = function (api, ctx) {
  api.extendQuasarConf((conf) => {
    extendWithDotenv(api, conf)
  })
}