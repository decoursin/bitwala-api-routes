const currencies = require('../../Config').currencies;

module.exports = function(Meteor, SimpleSchema) {
  return {
    amount: {
      type: Number,
      decimal: true,
      optional: true
    },
    convertedAmount: {
      type: Number,
      decimal: true
    },
    convertedCurrency: {
      type: String,
      allowedValues: currencies.map(function (c) {return c['value']})
    },
    sender: {
      type: Object
    },
    'sender.collection': {
      type: String,
      allowedValues: [ 'Users', 'Guests' ]
    },
    'sender.doc': {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    },

    // Vouchers
    vouchers: {
      type: [ Object ],
      defaultValue: []
    },
    'vouchers.$.name': {
      type: String
    },
    'vouchers.$.number': {
      type: Number,
      decimal: true
    },
    'vouchers.$.operation': {
      type: String,
      allowedValues: [ 'ADD', 'PERCENTAGE' ]
    }


  };
};
