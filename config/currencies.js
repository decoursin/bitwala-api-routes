module.exports = [
  // Fiat currnecies
  {
    value: 'EUR',
    label: 'EUR',
    symbol: '€',
    minFee: 1,
    crudeConversion: 1,
    psp: 'bitpay',
    baseFee: 0,
    countryIso: 'europeanunion',
    type: 'fiat'
  }, {
    value: 'GBP',
    label: 'GBP',
    symbol: '£',
    minFee: 0.7,
    crudeConversion: 1.4,
    psp: 'cubits',
    baseFee: 15,
    countryIso: 'gb',
    type: 'fiat'
  }, {
    value: 'USD',
    label: 'USD',
    symbol: '$',
    minFee: 1,
    crudeConversion: 0.9,
    psp: 'coinapult',
    baseFee: 20,
    baseInThisCurrency: true,
    countryIso: 'us',
    type: 'fiat'
  }, {
    value: 'SEK',
    label: 'SEK',
    symbol: 'SEK ',
    minFee: 10,
    crudeConversion: 0.1,
    psp: 'cubits',
    baseFee: 15,
    countryIso: 'se',
    type: 'fiat'
  }, {
    value: 'HUF',
    label: 'HUF',
    symbol: 'HUF ',
    minFee: 300,
    crudeConversion: 0.0032,
    psp: 'cubits',
    baseFee: 15,
    countryIso: 'hu',
    type: 'fiat'
  }, {
    value: 'NOK',
    label: 'NOK',
    symbol: 'kr',
    minFee: 10,
    crudeConversion: 0.11,
    psp: 'cubits',
    baseFee: 15,
    countryIso: 'no',
    type: 'fiat'
  }, {
    value: 'HRK',
    label: 'HRK',
    symbol: 'HRK ',
    minFee: 8,
    crudeConversion: 0.13,
    psp: 'cubits',
    baseFee: 15,
    countryIso: 'hr',
    type: 'fiat'
  }, {
    value: 'CHF',
    label: 'CHF',
    symbol: 'CHF ',
    minFee: 1.5,
    crudeConversion: 0.92,
    psp: 'cubits',
    baseFee: 15,
    countryIso: 'ch',
    type: 'fiat'
  }, {
    value: 'CZK',
    label: 'CZK',
    symbol: 'Kč',
    minFee: 30,
    crudeConversion: 0.037,
    psp: 'cubits',
    baseFee: 15,
    countryIso: 'cz',
    type: 'fiat'
  }, {
    value: 'DKK',
    label: 'DKK',
    symbol: 'DKK ',
    minFee: 7.5,
    crudeConversion: 0.13,
    psp: 'cubits',
    baseFee: 15,
    countryIso: 'dk',
    type: 'fiat'
  }, {
    value: 'PLN',
    label: 'PLN',
    symbol: 'PLN ',
    minFee: 4,
    crudeConversion: 0.24,
    psp: 'cubits',
    baseFee: 15,
    countryIso: 'pl',
    type: 'fiat'
  },

  // Crypto currencies
  {
    value: 'XBT',
    label: 'BTC',
    symbol: 'Btc',
    type: 'crypto'
  }
];
