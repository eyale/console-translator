const translate = require('google-translate-api');

module.exports = (str, lang = 'ru') => translate(str, {to: lang}).catch(console.error);
