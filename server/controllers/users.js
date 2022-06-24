var models = require('../models');

module.exports = {
  get: function (req, res) {
    res.status(200).send('somethingUser');
  },
  post: function (req, res) {
    models.users.create(req.body, function(err, data) {
      if (err) {
        throw Error('Error in Posting - Controller_User');
      }
    });
    res.sendStatus(201);
  }
};
