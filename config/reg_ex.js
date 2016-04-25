module.exports = {
  btcAddress: /^[13][a-km-zA-HJ-NP-Z0-9]{26,33}$/,
  
  iban: /^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{3,7}([a-zA-Z0-9]?){0,16}$/,
  bic: /[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?/i,
};
