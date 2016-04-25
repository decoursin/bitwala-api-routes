module.exports = {
  schema: function(Meteor, SimpleSchema) {

    if (!SimpleSchema) {
      SimpleSchema = require('../lib/SimpleSchema.js');
    }

    return {
      thread: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
      },
      text: {
        type: String
      },
      for: {
        type: [ String ]
      }
    };
  },
  helpers: function(Meteor) {
    return {
      isFromCurrentUser() {
        return Meteor.userId() === this.owner;
      }
    };
  },
};
