module.exports = function(SimpleSchema) {
  return new SimpleSchema({
    sendMonthlyReminder: {
      type: Boolean,
      label: 'Send me an email reminder'
    }
  });
};