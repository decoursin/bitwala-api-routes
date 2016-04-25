module.exports = function(SimpleSchema) {
  return new SimpleSchema({
    utilityBill: {
      type: String,
      optional: true,
      autoform: {
        afFieldInput: {
          type: 'fileUpload',
          collection: 'Files'
        }
      }
    },
    passport: {
      type: String,
      optional: true,
      autoform: {
        afFieldInput: {
          type: 'fileUpload',
          collection: 'Files'
        }
      }
    },
    postIdent: {
      type: String,
      optional: true,
      autoform: {
        afFieldInput: {
          type: 'fileUpload',
          collection: 'Files'
        }
      }
    },
    webIdent: {
      type: String,
      optional: true,
      autoform: {
        afFieldInput: {
          type: 'fileUpload',
          collection: 'Files'
        }
      }
    },
    verification2: {
      type: Boolean,
      optional: true,
      label: 'Verification 2 requested',
      index: 1
    },
    verification3: {
      type: Boolean,
      optional: true,
      index: 1,
      label: 'Verification 3 requested'
    }
  });  
};
