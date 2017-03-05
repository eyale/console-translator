const translate = require('google-translate-api'),
      translateRequest = process.argv[2];


translate(translateRequest, {to: 'ru'})
  .then(res => {
    console.log(`${translateRequest} на русском: ${res.text}`);
  })
  .catch(err => { console.error(err) });
