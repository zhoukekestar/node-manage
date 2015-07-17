
var http    = require('http');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('index.')


}).listen(3000, '0.0.0.0');
console.log('Listen on local:3000');
