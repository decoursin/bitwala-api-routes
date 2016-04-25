var utils = require('../utils');

module.exports = {
  schema: function(Meteor, SimpleSchema) {

    if (!SimpleSchema) {
      SimpleSchema = require('../lib/SimpleSchema.js');
    }

    return {
      users: {
        type: [ String ],
        regEx: SimpleSchema.RegEx.Id
      },

      /*
      readBy takes the format
      {
        userId1: Date,
        userId2: Date
      }
      */

      readBy: {
        type: Object,
        blackbox: true
      },
      lastMessage: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true
      }
    }
  },
  helpers: function(Meteor, Messages) {
    return {
      getLastMessage: function() {
        return Messages.findOne(this.lastMessage);
      },
      isUnread: function() {
        return this.readBy[Meteor.userId()] >= this.updatedAt;
      },
      markAsRead: function() {
        Meteor.call('threads.markAsRead', this._id);
      },
      getLastUpdated: function() {
        // TODO: format date
        return utils.dates.format(this.updatedAt, 'CONTEXTUAL');
      }
    };
  },
};
