module.exports = function(SimpleSchema) {
  return new SimpleSchema({
    level: {
      type: Number,
      index: 1,
      allowedValues: [ 0, 1, 2, 3, 10 ],
      autoValue: function () {
        if (this.isInsert) {
          return 0;
        }
      }
    },
    utilityBill: {
      type: Boolean,
      optional: true,
      label: 'Utility bill OK'
    },
    passport: {
      type: Boolean,
      optional: true,
      label: 'Passport OK'
    },
    webIdent: {
      type: Boolean,
      optional: true,
      label: 'Web Ident Ok'
    }
  });
};
