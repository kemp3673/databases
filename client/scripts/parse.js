var Parse = {

  server: '/classes/messages',

  create: function(message, successCB, errorCB = null) {

    $.ajax({
      url: Parse.server,
      type: 'POST',
      // database: 'chat',
      // user: 'root',
      // password: '',
      // host: 'localhost',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      // database: 'chat',
      // user: 'root',
      // password: '',
      // host: 'localhost',
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};
