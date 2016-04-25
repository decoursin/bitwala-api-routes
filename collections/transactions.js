const inputCollections = [
  'BitcoinInvoices'
];

const outputCollections = [
  'BankTransfers',
  'CardPurchases',
  'CardTopUps'
];

const senderCollections = [
  'Guests',
  'Users'
];

const recipientCollections = [
  'Contacts',
  'Users'
];

const entriesStatuses = [
  'missing',
  'new',
  'paid',
  'confirmed'
];


module.exports = {
  schema: function(Meteor, SimpleSchema) {

    if (!SimpleSchema) {
      SimpleSchema = require('../lib/SimpleSchema.js');
    }

    return {
      // Inputs and outputs
      inputsStatus: {
        type: String,
        allowedValues: entriesStatuses
      },
      outputsStatus: {
        type: String,
        allowedValues: entriesStatuses
      },

      inputs: {
        type: [ Object ]
      },
      'inputs.$.collection': {
        type: String,
        allowedValues: inputCollections
      },
      'inputs.$.doc': {
        type: String,
        regEx: SimpleSchema.RegEx.Id
      },

      outputs: {
        type: [ Object ]
      },
      'outputs.$.collection': {
        type: String,
        allowedValues: outputCollections
      },
      'outputs.$.doc': {
        type: String,
        regEx: SimpleSchema.RegEx.Id
      },

      // Senders & Recipients
      senders: {
        type: [ Object ],
      },
      'senders.$.collection': {
        type: String,
        allowedValues: senderCollections
      },
      'senders.$.doc': {
        type: String,
        regEx: SimpleSchema.RegEx.Id
      },

      recipients: {
        type: [ Object ],
      },
      'recipients.$.collection': {
        type: String,
        allowedValues: recipientCollections
      },
      'recipients.$.doc': {
        type: String,
        regEx: SimpleSchema.RegEx.Id
      },

      // Meta
      problem: {
        type: Boolean,
        defaultValue: false
      },
    };
  },
  helpers: function(Meteor, BitcoinInvoices, BankTransfers, CardPurchases, CardTopUps) {
    const Collections = {BitcoinInvoices: BitcoinInvoices, BankTransfers: BankTransfers, CardPurchases: CardPurchases, CardTopUps: CardTopUps};

    return {
      canExecute: function() {
        return this.inputsStatus === 'confirmed' && this.outputsStatus === 'new';
      },
      getInputs: function() {
        return this.inputs.map(function(input) {return Collections[input.collection].findOne(input.doc)});
      },
      getOutputs: function() {
        return this.outputs.map(function(output) {return Collections[output.collection].findOne(output.doc)});
      },
      getSenders: function() {
        return this.senders.map(function(sender){return Collections[sender.collection].findOne(sender.doc)});
      },
      getRecipients: function() {
        return this.recipients.map(function(recipient) {return Collections[recipient.collection].findOne(recipient.doc)});
      }
    };
  },
};
