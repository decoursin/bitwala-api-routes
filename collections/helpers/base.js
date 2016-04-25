module.exports = function(Meteor) {
  return {
    getOwner: function () {
      return this.owner ? Meteor.users.findOne(this.owner) : null;
    }
  };
};
