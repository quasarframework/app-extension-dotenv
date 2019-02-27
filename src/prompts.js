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
      message: "What is the name of your .env that you will be using for development builds?",
      default: ".env"
    },
    {
      type: 'input',
      name: 'env_production',
      message: "What is the name of your .env that you will be using for production builds?",
      default: ".env"
    },
    {
      type: 'input',
      name: 'common_root_object',
      message: "What name would you like to use for your Common Root Object ('none' means to not use one)?",
      default: "none"
    }
  ]
}
