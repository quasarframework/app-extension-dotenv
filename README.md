dotenv (quasar-app-extension-dotenv)
===

This project is an official Quasar v1 App Extension for [dotenv](https://www.npmjs.com/package/dotenv).

> WARNING
>
> This app extension has been updated to work with changes that were released with `@quasar/app - 1.0.0-beta.9`. If you have not upgraded to `1.0.0-beta.9` this app extension will not work.

For creating your own Quasar App Extension see tutorials:
1. Part 1: [here](https://medium.com/p/4a87561336ef)
2. Part 2: [here](https://medium.com/p/dac4740c1daa)

To add this App Extension to your Quasar application, run the following (in your Quasar app folder):

```
quasar ext add @quasar/dotenv
```
Which will retrieve it from NPM and install it.

You will be asked a few questions:
```
? What is the name of your .env that you will be using for development builds? .env
? What is the name of your .env that you will be using for production builds? .env
? What name would you like to use for your Common Root Object ('none' means to not use one)? none
```
Selecting `[enter]` on your keyboard will give you the defaults. The env file will be `.env` and there will be no common root object.

Any data in a `.env` will be placed in `process.env` at the browser level. 

If you specified a common root object, say `MyData`, then the data will be placed at `process.env.MyData`.

Be aware, if you have something like this in your `.env`:

`APP_PORT=4000`

Then you will need to use `parseInt()` function as it will be propogated to the browser code as a string.

To uninstall:
```
quasar ext remove @quasar/dotenv
```

# Patreon
If you like (and use) this App Extension, please consider becoming a Quasar [Patreon](https://www.patreon.com/quasarframework).
