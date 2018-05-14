

var http = require('http');
var url = require('url');



var server = http.createServer(function (req, res) {  

  
  // request handling logic...
  if (req.method !== 'GET') {
    return res.end('send me a GET\n')
  }

  var uplparsed = url.parse(req.url, true);
  var result = {};
  if ( uplparsed.pathname === '/api/parsetime' )
  {
    var dt = new Date(uplparsed.query['iso']);
    result.hour = dt.getHours();
    result.minute = dt.getMinutes();
    result.second = dt.getSeconds();
  }
  else if ( uplparsed.pathname === '/api/unixtime' )
  {
    result.unixtime = Date.parse(uplparsed.query['iso']);
  }
  else
  {
    console.log("wrong path");
    return res.end('wrong path\n');
  }

  res.writeHead(200, { 'content-type': 'application/json' });
  //res.write(JSON.stringify(result));
  return res.end(JSON.stringify(result));

})  

server.listen(process.argv[2]) 




/* shemotavazebuli vareianti

    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

*/