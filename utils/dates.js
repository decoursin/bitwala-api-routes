module.exports = {
  format: function (date, profile) {
    switch(profile) {
      case 'CONTEXTUAL':
        return 'CONTEXTUAL' + date;
      case 'LONG':
        return 'LONG' + date;
      default:
        return date;
    }
  }
};
