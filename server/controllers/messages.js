var models = require('../models');

module.exports = {
  get: function (req, res) {
    res.status(200).send('something');
    models.messages.getAll();
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req.body, function(err, data) {
      //
    });
    res.sendStatus(201);
  } // a function which handles posting a message to the database
};
