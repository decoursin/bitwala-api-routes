module.exports = {
  spectrocoin: {
    value: 'spectrocoin',
    label: 'Spectrocoin',
    orderLink: function(invoice) {
      if (invoice.response) {
        return 'https://spectrocoin.com/en/merchant/orders/view/' + invoice.response.orderRequestId + '.html';
      }
    }
  },
  coinapult: {
    value: 'coinapult',
    label: 'Coinapult',
    orderLink: function(invoice) {
      if (invoice.response) {
        return 'https://coinapult.com/invoice/' + invoice.response.transaction_id;
      }
    }
  },
  cubits: {
    value: 'cubits',
    label: 'Cubits',
    orderLink: function(invoice) {
      if (invoice.response) {
        return 'https://cubits.com/pdf/invoice/' + invoice.response.id + '.pdf';
      }
    }
  },
  bitpay: {
    value: 'bitpay',
    label: 'Bitpay',
    orderLink: function(invoice) {
      if (invoice.response) {
        return 'https://bitpay.com/dashboard/payments/' + invoice.response.id;
      }
    }
  }
};
