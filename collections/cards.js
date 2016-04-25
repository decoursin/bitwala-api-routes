const statuses = require('../Config').statuses;

module.exports = {
  schema: function(Meteor, SimpleSchema) {

    if (!SimpleSchema) {
      SimpleSchema = require('../lib/SimpleSchema.js');
    }

    return {
      label: {
        type: String,
        defaultValue: 'My Card'
      },
      status: {
        type: String,
        allowedValues: statuses.cards.map(function(s) {return s['value']})
      },
      externalId: {
        type: String,
        autoValue: function() {
          if (this.isInsert) {
            return null;
          }
        }
      },
      balance: {
        type: Number,
        decimal: true,
      },
      currency: {
        type: String,
        allowedValues: [ 'EUR' ],
        defaultValue: 'EUR'
      }
    };
  },
  helpers: function(Meteor) {
    return {

    };
  },
};
