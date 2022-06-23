exports.messages = require('./messages.js');
exports.users = require('./users.js');


// defines the messages and users controllers that your application will use. Skeletons of the controllers have already been created but you'll have to write out the details for their methods

var requestHandler = function(request, response) {
  var statusCode = 200;
  var postCode = 201;
  var notFoundCode = 404;
  var headers = defaultCorsHeaders;
  headers['Content-Type'] = 'application/json';

  if (request.url === '/chat/messages') {
    if (request.method === "GET") {
      console.log('GET req', statusCode);
      response.writeHead(statusCode, headers);
      response.end(JSON.stringify(dataSet));
    }
  }
  if (request.url === '/chat/messages') {
    if (request.method === "OPTIONS") {
      console.log('OPTIONS req', statusCode);
      response.writeHead(statusCode, headers);
      response.end('PASSED');
    }
  }
  if (request.method === "POST") {
    console.log('POST req', postCode);
    var post = '';
    var i = dataSet.length;
    request.on('data', function(chunk) {
      post += chunk;
    })
    request.on('end', function() {
      post = querystring.parse(post);
      dataSet.push({...JSON.parse(Object.keys(post)), message_id: i});
      i++;
      response.writeHead(postCode, headers);
      response.end('create')
    })

  }
  if (request.url !== '/chat/messages') {
    console.log('ERROR', notFoundCode);
    response.writeHead(notFoundCode, headers);
    response.end('404 not found');
  }
};