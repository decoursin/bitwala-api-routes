module.exports = {
  schema: function(Meteor, SimpleSchema) {

    if (!SimpleSchema) {
      SimpleSchema = require('../lib/SimpleSchema.js');
    }

    return {
      card: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
      }
    };
  },
  helpers: function(Meteor, Cards) {
    return {
      getCard: function() {
        return Cards.findOne(this.card);
      }
    };
  },
};
