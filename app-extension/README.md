# Quasar App Extension dotenv

@quasar/quasar-app-extension-dotenv is an official `Quasar CLI App Extension` for the popular [dotenv](https://www.npmjs.com/package/dotenv) package.

![@quasar/quasar-app-extension-dotenv](https://img.shields.io/npm/v/@quasar/quasar-app-extension-dotenv.svg?label=@quasar/quasar-app-extension-dotenv)
[![npm](https://img.shields.io/npm/dt/@quasar/quasar-app-extension-dotenv.svg)](https://www.npmjs.com/package/@quasar/quasar-app-extension-dotenv)

# Install
```bash
quasar ext add @quasar/dotenv
```
Quasar CLI will retrieve it from NPM and install the extension.

## Prompts

1. "What is the name of your .env that you will be using for development builds?"
  The default is ".env"

2. "What name would you like to use for your Common Root Object ('none' means to not use one)?"
  The default is "none"
  The "common root object" means off of "process.env" you will have a named object, basically for organization purposes.

3. "Create your .env files for you?"
  The default is "true" (yes)
  If you say "yes" to this question, then your .env files will be automatically created for you.

4. "For security, would you like your .env files automatically added to .gitignore?"
  The default is "true" (yes)
  If you say "yes" to this question, then your .env files will automatically be inserted into the .gitignore.
  For security purposes, because you may have sensitive data in your .env file, you should not keep it in a repository.

Any data in a `.env` will be placed in `process.env` at the browser level.

If you specified a common root object, say `MyData`, then the data will be placed at `process.env.MyData`.

If you have this:

`APP_PORT=4000`

Then it will be accessible via `process.env.APP_PORT` or if you have a common root object of `MyData` then it will be `process.env.MyData.APP_PORT`

Note: For security reasons, you cannot `console.log(process.env)`. Quasar does this to enhance your own security.

# Uninstall
```bash
quasar ext remove @quasar/dotenv
```

# Donate
If you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).

# License
MIT (c) Jeff Galbraith <jeff@quasar.dev>
