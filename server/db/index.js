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
  username: 'root',
  password: '',
  host: 'localhost'
});

conn.connect();

conn.query('SELECT * FROM messages', function(err, data) {
  if (err) {
    callback(new Error('CONNECTED FAILED'));
  } else {
    callback(null, data);
  }
});

