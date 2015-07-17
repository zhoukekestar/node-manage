
var http    = require('http');
var fs      = require('fs');
var process = require('child_process');
var child   = null;
var doing   = false;
var WebSocketServer = require('websocket').server;
var connection = null;
var webSocketServer = null;
// var spawn = require('child_process').spawn,
//     ls    = spawn('bash', ['./node-restart.sh']);

// ls.stdout.on('data', function (data) {
//   console.log('stdout: ' + data);
// });

// ls.stderr.on('data', function (data) {
//   console.log('stderr: ' + data);
// });

// ls.on('close', function (code) {
//   console.log('child process exited with code ' + code);
// });



var server = http.createServer(function (req, res) {

  // index
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.html', function(err, content) {

      if (err) {
        res.end('Error!')
      }
      content += '';
      res.end(content);

    });

  // restart
  } else if (req.url === '/restart') {
    res.writeHead(200, {'Content-Type': 'application/json'});


	  console.log('restarting...')
	  if (child !== null) {
	    child.kill('SIGINT');
	  }

	  child = process.spawn('bash', ['./restart.sh']);
	  child.stdout.on('data', function(d){
	    connection.sendUTF(d);
	  })
		res.end(JSON.stringify({msg: "successed!"}));



  // Not found
  } else {
    res.end('Not found.')
  }

})
server.listen(3001, '0.0.0.0');
console.log('Http on 3001.');
webSocketServer = new WebSocketServer({
  httpServer: server
})

webSocketServer.on('request', function(request){
  console.log('new request in')
  connection = request.accept(null, request.origin);
})
