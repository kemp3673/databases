var db = require('../db');
var index = require('../db/index.js');
var conn = require('../db/index.js');


module.exports = {
  getAll: function (callback) {
    // console.log('CB: ', callback);
    // console.log('\x1b[32m\x1b[1m', 'getAll is working');
    conn.query('SELECT message_id, text, username, roomname FROM messages INNER JOIN users ON messages.userID = users.userID INNER JOIN rooms ON messages.roomID = rooms.roomID;', function(err, data) {
      if (err) {
        callback(err);
      } else {
        // console.log('\x1b[32m\x1b[1m', 'DATA: ', Object.values(JSON.parse(JSON.stringify(data))));
        callback(Object.values(JSON.parse(JSON.stringify(data))));
      }
    });
  }, // a function which produces all the messages



  create: function (data, callback) {
  //   console.log('Inside Model Create - Data: ', data);

  //   conn.query('SELECT userID FROM users WHERE username ="' + data.username + '"', function(err, dataa) {
  //     console.log('SELECT userID FROM users WHERE username ="' + data.username + '";');
  //     console.log(dataa);
  //   });

  //   conn.query('SELECT userID FROM users WHERE username ="' + data.username + '"', function(err, id) {

  //     if (id.length === 0) {

  //       conn.query('INSERT IGNORE INTO users (username) VALUES ("' + data.username + '")', function(err, data) {
  //         console.log('\x1b[32m\x1b[1m', 'ADDED USER');
  //       });
  //     }
  //   });


    // conn.query('INSERT IGNORE INTO users (username) VALUES ("' + data.username + '")', function(err, data) {
    //   console.log('\x1b[32m\x1b[1m', 'ADDED USER');
    // });

    // conn.query('INSERT IGNORE INTO rooms (roomname) VALUES ("' + data.roomname + '")', function(err, data) {
    //   console.log('\x1b[32m\x1b[1m', 'ADDED ROOM');
    // });

    // 'INSERT INTO users (username) VALUES ("' + data.username + '")'

    // });

    conn.query('INSERT INTO users (username) SELECT * FROM (SELECT ' + data.username + ' AS username) WHERE NOT EXISTS (SELECT username FROM users WHERE username = ' + data.username + ') LIMIT 1;', function (err, data) {
      console.log('DATA: ', data);
      console.log('ERRR: ', err);
    });


    // INSERT INTO customer_details (customer_name,customer_address)
    // SELECT * FROM (SELECT 'Veronica' AS customer_name, '552 NewYork USA' AS customer_address) AS temp
    // WHERE NOT EXISTS (
    //     SELECT customer_name FROM customer_details WHERE customer_name = 'Veronica'
    // ) LIMIT 1;


    // if (conn.query('SELECT userID FROM users WHERE username ="' + data.username + '";') === []) {
    //   console.log('\x1b[32m\x1b[1m', 'INSIDE USERNAME ADD');
    //   conn.query('INSERT INTO users (username) VALUES ("' + data.username + '");');
    // }
    // // if (conn.query('SELECT roomID FROM rooms WHERE roomname ="' + data.roomname + '";') === undefined) {
    // //   console.log('\x1b[32m\x1b[1m', 'INSIDE ROOMNAME ADD');
    // //   conn.query('INSERT INTO rooms (roomname) VALUES ("' + data.roomname + '");');
    // // }
    // conn.query('SELECT username FROM users WHERE EXISTS (' + data.username + ');', function (err, data) {
    //   console.log('errrrrrrr: ', err);
    //   console.log('SELECT USER: ', data);
    // });

    conn.query('INSERT INTO messages (text, roomID, userID) VALUES ("' + data.text + '", (SELECT roomID FROM rooms WHERE roomname ="' + data.roomname + '"), (SELECT userID FROM users WHERE username ="' + data.username + '"));', function (err, data) {
      console.log('QUERY DATA: ', data);
      if (err) {
        console.log('ERROR: ', err);
      } else {
        callback(data);
      }
    });

    //      INSERT INTO tab_student (name_student, id_teacher_fk)
    //        VALUES ('dan red',
    //          (SELECT id_teacher FROM tab_teacher WHERE name_teacher ='jason bourne')

  } // a function which can be used to insert a message into the database
};

//  req.body { username: 'Viren', text: 'aaaaaaaaaaaaaaaaaa', roomname: 'asdf' }




// INSERT INTO authors (id, name, city) VALUES
// (1, 'Michaela Lehr', 'Berlin'),
// (2, 'Michael Wanyoike', 'Nairobi'),
// (3, 'James Hibbard', 'Munich'),
// (4, 'Karolina Gawron', 'Wrocław');
