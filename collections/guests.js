module.exports = {
  schema: function(Meteor, SimpleSchema) {

    if (!SimpleSchema) {
      SimpleSchema = require('../lib/SimpleSchema.js');
    }

    return {
      email: {
        type: String.Email,
        regEx: SimpleSchema.RegEx.Id
      },
      ipAddress: {
        type: String
      }
    };
  },
  helpers: function(Meteor) {
    return {

    };
  },
};
