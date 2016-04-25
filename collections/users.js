const verificationConfig = require('../Config').verification;

module.exports = {
  schema: function(Meteor, SimpleSchema) {

    if (!SimpleSchema) {
      SimpleSchema = require('../lib/SimpleSchema.js');
    }

    const UserFiles = require('./schemas/users/files')(SimpleSchema);
    const UserProfile = require('./schemas/users/profile')(SimpleSchema);
    const UserSettings = require('./schemas/users/settings')(SimpleSchema);
    const UserVerification = require('./schemas/users/verification')(SimpleSchema);

    return {
      _id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
      },
      emails: {
        type: [ Object ]
      },
      'emails.$.address': {
        type: String,
        regEx: SimpleSchema.RegEx.Email
      },
      'emails.$.verified': {
        type: Boolean
      },
      interactions: {
        type: Object,
        blackbox: true,
        optional: true
      },
      twoFactor: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true
      },
      temp2FA: {
        type: String,
        optional: true
      },
      profile: {
        type: UserProfile,
        optional: true
      },
      services: {
        type: Object,
        optional: true,
        blackbox: true
      },
      verification: {
        type: UserVerification
      },
      files: {
        type: UserFiles,
        optional: true
      },
      roles: {
        type: [ String ],
        blackbox: true,
        optional: true
      },
      settings: {
        type: UserSettings,
        optional: true,
        autoValue: function() {
          if (this.isInsert) {
            return {
              sendMonthlyReminder: true
            };
          }
        }
      },
      deletedAt: {
        type: Date,
        optional: true
      },
      createdAt: {
        type: Date,
        autoValue: function() {
          if (this.isInsert) {
            return new Date();
          }
        }
      },
      // have the option to deactivate users, as Farid suggested
      deactivated: {
        type: Boolean,
        defaultValue: false
      }
    };
  },
  helpers: function(Meteor) {
    return {
      fullName: function() {
        if (this.profile && this.profile.firstName && this.profile.lastName) {
          return this.profile.firstName + ' ' + this.profile.lastName;
        }
        return 'User';
      },
      email: function() {
        return this.emails[0];
      },
      isAdmin: function() {
        // as soon as meteor let's us use ES2016, this should become
        // return this.roles.includes('admin');
        if (this.roles.indexOf('admin') !== -1) {
          return true;
        }
        return false;
      },
      getLimit: function() {
        // ToDo: rewrite this, because the global Config does not exist
        return verificationConfig.limits[this.getLevel()];
      },
      getRemaining: function() {
        // TODO: figure this out
      }
    };
  },
}
