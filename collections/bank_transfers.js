const currencies = require('../../Config').currencies;
const _ = require('underscore');

module.exports = {
  schema: function(Meteor, SimpleSchema) {

    if (!SimpleSchema) {
      SimpleSchema = require('../lib/SimpleSchema.js');
    }

    return {
      bankAccount: {
        type: Object
      },
      reference: {
        type: String,
        optional: true
      },

      // Fees
      fees: {
        type: [ Object ],
        defaultValue: [],
        autoValue() {
          if (this.isInsert) {
            const currency = this.field('currency').value;
            const baseFee = _.findWhere({currency}).baseFee;
            return [
              {name: 'base_fee', number: baseFee, operation: 'ADD'}
            ];
          }
        }
      }

    };
  },
  helpers: function(Meteor) {
    return {

    };
  },
};
