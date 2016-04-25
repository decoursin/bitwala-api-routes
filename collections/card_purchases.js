const cardConfig = require('../Config').cards;

module.exports = {
  schema: function(Meteor, SimpleSchema) {

    const addressSchema = require('./schemas/address');

    if (!SimpleSchema) {
      SimpleSchema = require('../lib/SimpleSchema.js');
    }

    return {
      card: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
      },
      type: {
        type: String,
        allowedValues: [ 'physical', 'virtual' ],
        defaultValue: 'virtual'
      },
      expressDelivery: {
        type: Boolean,
        label: 'Express delivery: 4 working days (+ €70)'
      },
      address: {
        type: new SimpleSchema(addressSchema),
        optional: true
      }
    };
  },
  helpers: function(Meteor, Cards) {
    return {
      getCard: function() {
        return Cards.findOne(this.card);
      },
      getPrice: function() {
        var price = 0;
        if (this.delivery === 'virtual') {
          price = cardConfig['prices']['virtual'];
        } else if (this.expressDelivery) {
          price = cardConfig['prices']['expressDelivery'];
        } else {
          price = cardConfig['prices']['physical'];
        }
        return price;
      }
    };
  },
};
