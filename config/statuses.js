module.exports = {
  entries: [
    {value: 'new', label: 'New', class: 'primary', icon: 'th-list', canCancel: true},
    {value: 'paid', label: 'Pending', class: 'warning', icon: 'btc'},
    {value: 'confirmed', label: 'Confirmed', class: 'warning', icon: 'btc'}
  ],
  cards: [
    {value: 'new', label: 'Unpaid', class: 'primary', icon: 'th-list'},
    {value: 'activated', label: 'Activated', class: 'success', icon: 'check'}
  ]
};
