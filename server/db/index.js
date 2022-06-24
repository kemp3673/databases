var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

var conn = mysql.createConnection({
  database: 'chat',
  user: 'root',
  password: '',
  host: 'localhost'
});

conn.connect();


conn.query('SELECT text, username, roomname FROM messages INNER JOIN users ON messages.userID = users.userID INNER JOIN rooms ON messages.roomID = rooms.roomID;', function(err, data) {
  if (err) {
    throw err;
  } else {
    console.log('\x1b[32m\x1b[1m', 'DATA: ', JSON.parse(JSON.stringify(data)));
    return Object.values(JSON.parse(JSON.stringify(data)));
  }
});

