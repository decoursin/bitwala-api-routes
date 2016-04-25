const statuses = require('../../Config').statuses;
const currencies = require('../../Config').currencies;

module.exports = function(Meteor, SimpleSchema) {

  if (!SimpleSchema) {
    SimpleSchema = require('../../lib/SimpleSchema.js');
  }

  return {
    transaction: {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    },
    status: {
      type: String,
      allowedValues: statuses.entries.map(function (s) {return s['value'];}),
      autoValue: function () {
        if (this.isInsert) {
          return 'new';
        }
      }
    },
    problem: {
      type: Boolean,
      defaultValue: false,
    },
    currency: {
      type: String,
      allowedValues: currencies.map(function (c) {return c['value'];})
    },
    amount: {
      type: Number,
      decimal: true
    },


    // Fees
    fees: {
      type: [ Object ],
      defaultValue: []
    },
    'fee.$.name': {
      type: String
    },
    'fee.$.number': {
      type: Number,
      decimal: true
    },
    'fee.$.operation': {
      type: String,
      allowedValues: [ 'ADD', 'PERCENTAGE' ]
    }

  };
};
