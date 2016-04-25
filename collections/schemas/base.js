module.exports = function(Meteor, SimpleSchema) {

  if (!SimpleSchema) {
    SimpleSchema = require('../../lib/SimpleSchema.js');
  }

  return {
    owner: {
      type: String,
      optional: true,
      autoValue: function () {
        if (this.isInsert) {
          return Meteor.isClient ? Meteor.userId() : this.userId;
        }
      }
    },
    createdAt: {
      type: Date,
      autoValue: function () {
        if (this.isInsert) {
        return new Date();
        }
      }
    },
    updatedAt: {
      type: Date,
      autoValue: function () {
        if (this.isUpdate || this.isInsert) {
          return new Date();
        }
      }
    },
    deletedAt: {
      type: Date,
      optional: true
    },
  };
};
