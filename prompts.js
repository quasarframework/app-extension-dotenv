/**
 * Quasar App Extension prompts script
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 * Example:

  return [
    name: {
      type: 'string',
      required: true,
      message: 'Quasar CLI Extension name (without prefix)',
    },
    preset: {
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        {
          name: 'Install script',
          value: 'install'
        },
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Uninstall script',
          value: 'uninstall'
        }
      ]
    }
  ]

 */

module.exports = function () {
  return [
    {
      type: 'input',
      name: 'env_development',
      message: "Name of .env for development:",
      default: ".env"
    },
    {
      type: 'input',
      name: 'env_production',
      message: "Name of .env for production:",
      default: ".env"
    },
    {
      type: 'input',
      name: 'common_root_object',
      message: "Name of your Common Root Object:",
      default: "none"
    }
  ]
}
