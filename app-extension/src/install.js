/**
 * Quasar App Extension install script
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 *
 */
const fs = require('fs')

module.exports = function (api) {
  // create array of env files
  const envFiles = [api.prompts.env_development, api.prompts.env_production]

  // does user want .env files created?
  if (api.prompts.create_env_files === true) {
    envFiles.forEach((envName) => {
      const envPath = api.resolve.app(envName)
      if (fs.existsSync(envPath)) {
        console.error(`App Extension (dotenv): '${envName}' already exists; No need to create it.`)
        return
      }
      let fd
      try {
        // create files that don't already exist
        fd = fs.openSync(envPath, 'w')
      }
      catch(err) {
        console.error(`App Extension (dotenv): '${envName}' error code (${err.code}).`)
        return;
      }
      fs.writeSync(fd, '# This is your .env file\r\n# The data added here will be propagated to the client\r\n# example:\r\n# PORT=8080\r\n')
      fs.closeSync(fd)
    })
  }

  // does user want .env added to .gitignore?
  if (api.prompts.add_env_to_gitignore === true) {
    const gitignorePath = api.resolve.app('.gitignore')
    // read .gitignore
    let buffer = fs.readFileSync(gitignorePath, 'utf8')
    // convert to array
    let data = buffer.split('\n')
    // iterate env files
    envFiles.forEach((envName) => {
      // See if the .env file already exists in .gitignore
      if (!data.includes(envName)) {
        data.push(envName)
      }
    })
    // rejoin array to string
    data = data.join('\n')
    // convert to buffer
    buffer = Buffer.from(data)
    // write .gitignore
    fs.writeFileSync(gitignorePath, buffer, 'utf8')
  }
}
