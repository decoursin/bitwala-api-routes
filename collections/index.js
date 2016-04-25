module.exports = {
  // Meteor reference is passed to be compatible with both web and native
  baseHelpers: function (Meteor) {
    return require('./helpers/base')(Meteor);
  },
  baseSchema: function (Meteor, SimpleSchema) {
    return require('./schemas/base')(Meteor, SimpleSchema);
  },
  entriesHelpers: function (Meteor, Transactions) {
    return require('./helpers/entries')(Meteor, Transactions);
  },
  entriesSchema: function (Meteor, SimpleSchema) {
    return require('./schemas/entries')(Meteor, SimpleSchema);
  },
  inputsSchema: function () {
    return require('./schemas/inputs')(Meteor, SimpleSchema);
  },
  outputsSchema: function () {
    return require('./schemas/outputs')(Meteor, SimpleSchema);
  },
  BankTransfers: require('./bank_transfers'),
  BankAccounts: require('./bank_accounts'),
  BitcoinInvoices: require('./bitcoin_invoices'),
  CardPurchases: require('./card_purchases'),
  CardTopUps: require('./card_top_ups'),
  Contacts: require('./contacts'),
  Cards: require('./cards'),
  Guests: require('./guests'),
  Messages: require('./messages'),
  Notifications: require('./notifications'),
  Threads: require('./threads'),
  Transactions: require('./transactions'),
  Users: require('./users')
};
