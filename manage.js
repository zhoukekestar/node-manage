
var http  = require('http');
var fs    = require('fs');
var process = require('child_process');
var child;

http.createServer(function (req, res) {

  // index
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.html', function(err, content) {
      if (err) return callback(new Error(err));
      content += '';

      res.end(content);
    });

  // restart
  } else if (req.url == '/restart') {
    res.writeHead(200, {'Content-Type': 'application/json'});

    console.log('restart...')
    child = process.execFile('./node-restart.sh', function(err, stdout, stderr) {
      console.log('restarted!')
      stdout = stdout.replace(/\n/g, '<br>');
      stderr = stderr.replace(/\n/g, '<br>');
      res.end(JSON.stringify({msg: "stdout:<br>" + stdout + '<br>stderr:<br>' + stderr}));
    });
  }

}).listen(3001, '0.0.0.0');
console.log('Listen on local:3001');
