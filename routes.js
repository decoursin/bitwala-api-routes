module.exports = {
  test: [
    {
      name: 'read',
      action: 'get',
      auth: true,
    },
    {
      name: 'create',
      action: 'post',
      auth: true,
    },
    {
      name: 'user',
      action: 'get',
      auth: true,
    }
  ],
  info: [
    {
      name: 'currencies',
      action: 'get',
      auth: false,
    },
    {
      name: 'verification',
      action: 'get',
      auth: false,
    }
  ]
};
