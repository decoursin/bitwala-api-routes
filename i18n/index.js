var I18n = function(keyword, language) {
  if (!language) {
    language = 'en';
  }

  var translations = {};

  switch (language) {
    case 'fr':
      translations[language] = require('./fr.i18n.js'); // filename can not be dynamic here
      break;
    default:
      translations[language] = require('./en.i18n.js');
  }

  if (typeof translations[language][keyword] !== 'undefined') {
    return translations[language][keyword];
  }
  return keyword;
};

module.exports = I18n;
