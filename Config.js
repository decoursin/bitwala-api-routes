module.exports = {
  bitcoinPsps: require('./config/bitcoin_psps'),
  cards: require('./config/cards'),
  currencies: require('./config/currencies'),
  regEx: require('./config/reg_ex'),
  statuses: require('./config/statuses'),
  verification: require('./config/verification'),
  
  
  // General
  siteName: 'Bitwala',
  siteUrl: 'https://bitwa.la',
  blogUrl: 'http://about.bitwa.la',
  blogPostsUrl: 'http://about.bitwa.la/news',
  ToS: 'http://about.bitwa.la/tos/',
  ToSString: 'I have read and agree to the <a href="' + 'http://about.bitwa.la/tos/' + '"target="_blank">Terms of Service</a>.',
  imprint: 'http://about.bitwa.la/imprint/',
  privacy: 'http://about.bitwa.la/privacy/',
  contactUrl: 'http://about.bitwa.la/contact/',
  faqsUrl: 'http://about.bitwa.la/knowledgebase/',
  calendarUrl: 'http://doodle.com/bitwala',
  addressLink: 'https://www.google.de/maps/place/Bitwala+GmbH/@52.4940332,13.4270113,17z/data=!3m1!4b1!4m2!3m1!1s0x47a84fb457ec5c5b:0x782c79b3b1c8c716?hl=en',
  phoneNumber: '+49 (0) 30 8939 8563',

  // Legal
  companyName: 'Bitwala GmbH',
  legalAddress: 'Bitwala GmbH, Umspannwerk Kreuzberg, Ohlauer Str. 43, 10999 Berlin',
  legalAddressNoName: 'Umspannwerk Kreuzberg, Ohlauer Str. 43, 10999 Berlin',

  // Social
  facebook: 'https://facebook.com/bitwala',
  twitter: 'bitwala',
  twitterUrl: 'https://twitter.com/bitwala',
  linkedIn: 'https://www.linkedin.com/company/bitwala',
  googlePlus: 'https://plus.google.com/+BitwaLa',
  trustpilot: 'https://www.trustpilot.com/review/bitwa.la',
  trustpilotReview: 'https://www.trustpilot.com/evaluate/bitwa.la',
  vimeo: 'http://vimeo.com/142531297',

  // Emails
  adminEmail: 'support@bitwa.la',
  fromEmail: 'Bitwala Support <support@bitwa.la>',

  // App logic
  defaultCurrency: 'EUR',
  disallowedReferences: [ 'asdf', 'asdfasdf', 'test', 'bitcoin' ],
};