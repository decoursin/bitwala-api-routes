const countries = require('./lib/countries');

module.exports = {
  lineOne: {
    type: String
  },
  lineTwo: {
    type: String,
    optional: true
  },
  city: {
    type: String
  },
  country: {
    type: String,
    allowedValues: countries
  },
  region: {
    type: String,
    optional: true
  },
  postcode: {
    type: String
  }
};
