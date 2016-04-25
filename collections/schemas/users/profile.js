const countries = require('../lib/countries');

module.exports = function(SimpleSchema) {
  return new SimpleSchema({
    firstName: {
      type: String,
      optional: true
    },
    lastName: {
      type: String,
      optional: true
    },
    address: {
      type: String,
      label: 'Street and housenumber',
      optional: true
    },
    city: {
      type: String,
      optional: true
    },
    postcode: {
      type: String,
      optional: true
    },
    region: {
      type: String,
      optional: true
    },
    country: {
      type: String,
      allowedValues: countries.map(function(c) {return c['value']}),
      autoform: {
        options: function() {
          return countries;
        }
      },
      optional: true
    },
    gender: {
      type: String,
      allowedValues: [ 'm', 'f' ],
      defaultValue: 'm',
      autoform: {
        afFieldInput: {
          type: 'select-radio-inline',
          options: function () {
            return [
              {
                label: 'Male',
                value: 'm'
              }, {
                label: 'Female',
                value: 'f'
              }
            ];
          }
        }
      },
      optional: true
    },
    telephone: {
      type: String,
      optional: true
    },
    dob: {
      type: Date,
      optional: true,
      label: 'Date of birth',
      autoform: {
        afFieldInput: {
          type: 'bootstrap-datepicker'
        }
      }
    }
  });
};
