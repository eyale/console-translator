# [npm](https://www.npmjs.com/package/console-translator)
This is my public package
It can translate from english to russian just in console

So simple to use

```
$ npm i -g console-translator
$ npm run console-translator length

> consoleTranslator@1.0.10 console-translator /Users/{whoami}/apps/console-translator
> node index.js "length"

  length |на русском-> Длина
```

in .bashrc add:
```
export PATH=./node_modules/.bin:$PATH
```
in terminal:
```
console-translator hi

hi |на русском-> Здравствуй
```
