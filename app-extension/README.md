# Quasar App Extension dotenv

@quasar/quasar-app-extension-dotenv is an official `Quasar CLI App Extension` for the popular [dotenv](https://www.npmjs.com/package/dotenv) package.

![@quasar/quasar-app-extension-dotenv](https://img.shields.io/npm/v/@quasar/quasar-app-extension-dotenv.svg?label=@quasar/quasar-app-extension-dotenv)
[![npm](https://img.shields.io/npm/dt/@quasar/quasar-app-extension-dotenv.svg)](https://www.npmjs.com/package/@quasar/quasar-app-extension-dotenv)

**Now compatible with Quasar v2 beta**

> The Dotenv App Extension works only for development and production builds. If you need something less-opinionated, go to the [@quasar/quasar-app-extension-qenv](https://github.com/quasarframework/app-extension-qenv) app extension.

> Need some training using `app-extension-dotenv`? You can [watch this video](https://quasarcast.com/extensions/dotenv) by Luke Diebold. Impressed by this video? You can also find him on [twitter](https://twitter.com/LukeDiebold) and [github](https://github.com/ldiebold).

# Install
```bash
quasar ext add @quasar/dotenv
```
Quasar CLI will retrieve it from NPM and install the extension.

## Prompts

`"What is the name of your .env that you will be using for development builds?"` 

The default is ".env"

`"What name would you like to use for your Common Root Object ('none' means to not use one)?"`

The default is "none". If a value is set, this value will be appended to `process.env`.

E.g. If a value is set in .env (e.g. `PORT`). Without a Common Root Object it will be accessible through `process.env.PORT`. If a Common Root Object is set (e.g. `MyCompany`), then it will be accessible through `process.env.MyCompany.PORT`.

`"Create your .env files for you?"`

The default is "true" (yes)

If you say "yes" to this question, then your .env files will be automatically created for you.

`"For security, would you like your .env files automatically added to .gitignore?"`

The default is "true" (yes)

If you say "yes" to this question, then your .env files will automatically be inserted into the .gitignore.

For security purposes, because you may have sensitive data in your .env file, you should not keep it in a repository.

Note: For security reasons, you cannot `console.log(process.env)`. Quasar does this to enhance your own security.

# Uninstall
```bash
quasar ext remove @quasar/dotenv
```

# Donate
If you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).

# License
MIT (c) Jeff Galbraith <jeff@quasar.dev>
