module.exports = {
  currencies: [ 'EUR' ],
  prices: {
    virtual: 5,
    physical: 10,
    expressDelivery: 80
  },
  eta: {
    virtual: '1 working day',
    physical: '10 working days',
    expressDelivery: '4 working days'
  },
  topUp: {
    fee: 0.005,
    min: 10
  },
  disallowedCountries: [ 'AZ', 'IN', 'US', 'UM', 'VI' ]
};
