var http = require('http');

function handleReq(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}

http.createServer(handleReq).listen(8124);

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8125);


console.log('Server running at http://127.0.0.1:8124/');