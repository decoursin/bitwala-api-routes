var regEx = require('../Config').regEx;

module.exports = {
  schema: function(Meteor, SimpleSchema) {

    if (!SimpleSchema) {
      SimpleSchema = require('../lib/SimpleSchema.js');
    }

    return {
      name: {
        type: String,
      },
      type: {
        type: String,
        allowedValues: [ 'BUSINESS', 'INDIVIDUAL' ],
        defaultValue: 'INDIVIDUAL'
      },

      // Can be associated with a user
      collection: {
        type: String,
        allowedValues: [ 'Users' ],
        optional: true
      },
      doc: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true
      },


      emailAddress: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true
      },
      phoneNumber: {
        type: String,
        optional: true
      },
      bankAccounts: {
        type: [ Object ],
        optional: true
      },
      bitcoinAddresses: {
        type: [ String ],
        regEx: regEx.btcAddress,
        optional: true
      }
    };
  },
  helpers: function(Meteor) {
    return {

    };
  },
};
