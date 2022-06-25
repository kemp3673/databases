var models = require('../models');

module.exports = {
  get: function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    models.messages.getAll(function(data) {
      //console.log('\x1b[32m\x1b[1m', 'DATA WITHIN CONTROLLER: ', data);
      res.send(data);
    });
    //res.send(models.messages.getAll('SELECT message_id, text, username, roomname FROM messages INNER JOIN users ON messages.userID = users.userID INNER JOIN rooms ON messages.roomID = rooms.roomID;'));
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    console.log('req.body', req.body);
    models.messages.create(req.body, function(err, data) {
      if (err) {
        throw err;
      } else {
        console.log('\x1b[32m\x1b[1m', 'SUCCESS @ POST', data);
        res.sendStatus(201);
      }
    });

  } // a function which handles posting a message to the database
};
