var db = require('../db');
var index = require('../db/index.js');


module.exports = {
  getAll: function () { }, // a function which produces all the messages
  create: function () { } // a function which can be used to insert a message into the database
};

// SELECT *
// FROM messages
// INNER JOIN users
// ON messages.userID = users.userID
// INNER JOIN rooms
// ON messages.roomID = rooms.roomID;

// SELECT *
//   FROM messages
//   INNER JOIN users
//   ON messages.userID = users.userID
//   INNER JOIN rooms
//   ON messages.roomID = rooms.roomID;);