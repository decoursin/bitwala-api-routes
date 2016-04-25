var regEx = require('../Config').regEx;

module.exports = {
  schema: function(Meteor, SimpleSchema) {

    if (!SimpleSchema) {
      SimpleSchema = require('../lib/SimpleSchema.js');
    }

    return {
      psp: {
        type: String,
        optional: true
      },
      depositAddress: {
        type: String,
        optional: true
      },
      totalRequested: {
        type: Number,
        decimal: true,
        optional: true
      },
      totalReceived: {
        type: Number,
        autoValue: function () {
          if (this.isInsert) {
            return 0;
          }
        }
      },
      currency: {
        type: String,
        allowedValues: ['XBT'],
        autoValue: function () {
          if (this.isInsert) {
            return 'XBT';
          }
        }
      },
      validUntil: {
        type: Date,
        optional: true
      },
      response: {
        type: Object,
        blackbox: true,
        optional: true
      }
    };
  },
  helpers: function(Meteor) {
    return {
      testMethod: function() {
        return true;
      }
    };
  },
};
