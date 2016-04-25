var regEx = require('../Config').regEx;
const currencies = require('../Config').currencies;

module.exports = {
  schema: function (Meteor, SimpleSchema) {

    if (!SimpleSchema) {
      SimpleSchema = require('../lib/SimpleSchema.js');
    }

    return {
      recipientType: {
        type: String,
        allowedValues: ['personal', 'business'],
        defaultValue: 'personal'
      },
      currency: {
        type: String,
        allowedValues: currencies.map(function(c) {return c['value]']}),
        label: 'Currency',
      },
      name: {
        type: String,
        // ToDo: refine this regex. Or get rid of it.
        // regex: /^[\S+ ]+\S+$/,
        label: 'Name',
      },
      iban: {
        type: String,
        regEx: regEx.iban,
        label: 'IBAN',
      },
      bic: {
        type: String,
        regEx: regEx.bic,
        label : 'BIC',
      },
      recipientAddress: {
        type: String,
        optional: true
      },
      recipientCountry: {
        type: String,
        regEx: /^[A-Z]{2}$/,
        optional: true
      },
      bankName: {
        type: String,
        optional: true
      },
      bankCountry: {
        type: String,
        regEx: /^[A-Z]{2}$/,
        optional: true
      },
    };
  },
  helpers: function(Meteor) {
    return {

    };
  },
};
