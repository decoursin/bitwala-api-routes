module.exports = function(Meteor, SimpleSchema) {
  return {
    recipient: {
      type: Object
    },
    'recipient.collection': {
      type: String,
      allowedValues: [ 'Users', 'Contacts' ]
    },
    'recipient.doc': {
      type: String,
      regEx: SimpleSchema.RegEx.Id
    }
  };
};
