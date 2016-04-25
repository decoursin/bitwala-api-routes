module.exports = function(Meteor, Transactions) {
  return {
    getTransaction: function () {
      return Transactions.findOne(this.transaction);
    }
  };
};
