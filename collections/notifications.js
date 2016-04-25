module.exports = {
  schema: function(Meteor, SimpleSchema) {

    if (!SimpleSchema) {
      SimpleSchema = require('../lib/SimpleSchema.js');
    }

    return {
      label: {
        type: String
      },
      domain: {
        type: String,
        label: 'Type of notification'
      },
      link: {
        type: String
      },
      read: {
        type: Boolean,
        defaultValue: false
      },

      // External services e.g. slack email
      services: {
        type: Object,
        optional: true
      },

      /*
      Slack

      {
        text: 'Message here',
        channel: '#bitwala_transactions'
      }
      */

      'services.slack': {
        type: Object,
        blackbox: true,
        optional: true
      },

      /*
      Email
      {
        message: '"We've sent the money to the specified PayPal account',
        buttonText: 'See details'
      }
      */

      'services.email': {
        type: Object,
        blackbox: true,
        optional: true
      }
    };
  },
  helpers: function(Meteor) {
    return {

    };
  },
};
