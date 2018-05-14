var http = require('http')  
var fs = require('fs');

var server = http.createServer(function (req, res) {  
  // request handling logic...

  res.writeHead(200, { 'content-type': 'text/plain' });

  var readStream = fs.createReadStream(process.argv[3]);  

  readStream.on('close', function () {
    res.end();
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function(err) {
    res.end(err);
  });  

  readStream.pipe(res);

})  

server.listen(process.argv[2]) 