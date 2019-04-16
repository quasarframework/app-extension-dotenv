dotenv (quasar-app-extension-dotenv)
===

![official icon](https://img.shields.io/badge/Quasar%201.0-Official%20CLI%20App%20Extension-green.svg)
![npm (scoped)](https://img.shields.io/npm/v/@quasar/quasar-app-extension-dotenv.svg?style=plastic)

[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/quasarframework/app-extension-dotenv.svg)]()
[![GitHub repo size in bytes](https://img.shields.io/github/repo-size/quasarframework/app-extension-dotenv.svg)]()
[![npm](https://img.shields.io/npm/dt/@quasar/quasar-app-extension-dotenv.svg)](https://www.npmjs.com/package/@quasar/quasar-app-extension-dotenv)

This project is an official Quasar v1 CLI App Extension for [dotenv](https://www.npmjs.com/package/dotenv).

quasar-app-extension-dotenv is a `CLI App Extension` for [Quasar Framework v1](https://v1.quasar-framework.org/). It will not work with legacy versions of Quasar Framework.

This work is currently in `beta` and there are expected changes while things get worked out. Your help with testing is greatly appreciated.

# Test Project
In **demo** folder of **app-extension-dotenv**.

# Demo
Can be found [here](https://quasarframework.github.io/app-extension-dotenv/demo/dist/spa/#/).

# Install
To add this App Extension to your Quasar application, run the following (in your Quasar app folder):

```
quasar ext add @quasar/dotenv
```
Which will retrieve it from NPM and install it.

You will be asked a few questions. Type in your answers:
```
? What is the name of your .env that you will be using for development builds? .env.dev
? What is the name of your .env that you will be using for production builds? .env.prod
? What name would you like to use for your Common Root Object ('none' means to not use one)? none
? Create your .env files for you? Yes
? For security, would you like your .env files automatically added to .gitignore? Yes
```
Selecting `[enter]` on your keyboard will give you the defaults. The env file will be `.env` and there will be no common root object.

If you do not want your .env files created for you, say no. However, if the specified .env file already exists, it will NOT be overwritten. Note that if the files do not exist, then the build will fail.

Also, it is highly recommended to add your .env files to your .gitignore. They really do not belong in your repository as they may hold sensitive data.

Any data in a `.env` will be placed in `process.env` at the browser level. 

If you specified a common root object, say `MyData`, then the data will be placed at `process.env.MyData`.

Be aware, if you have something like this in your `.env`:

`APP_PORT=4000`

Then you will need to use the `parseInt()` function as it will be propogated to the browser code as a string.

# Uninstall
```
quasar ext remove @quasar/dotenv
```

# Patreon
If you like (and use) this App Extension, please consider becoming a Quasar [Patreon](https://www.patreon.com/quasarframework).
