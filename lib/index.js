const translate = require('google-translate-api'),
      translateRequest = process.argv[2];

module.exports = (translateRequestNotFromConsole) => {
  const translateVariable = translateRequestNotFromConsole || translateRequest;

  translate(translateVariable, {to: 'ru'})
    .then(res => {
      return console.log(`<|   ${translateVariable} |на русском-> ${res.text}   |>`);
  })
  .catch(err => { console.error(err) });
}
