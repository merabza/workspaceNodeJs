var http = require('http');

http.get(process.argv[2], function(res) {
  //console.log("Got response: " + res.statusCode);
  res.setEncoding('utf8');
  res.on('data', function(data) {
    console.log(data);
  });
  response.on('error', console.error);
}).on('error', console.error);