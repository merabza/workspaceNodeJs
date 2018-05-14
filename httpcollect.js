const BufferList = require('bl')
var http = require('http');



http.get(process.argv[2], function(response) {
  //console.log("Got response: " + res.statusCode);
  var bl = new BufferList()
  response.setEncoding('utf8');
  response.on('data', function(data) {
    bl.append(data);
  });
  response.on('end', function() {
    console.log(bl.length);
    console.log(bl.toString());
  });
  response.on('error', console.error);
/*  response.pipe(bl(function (err, data) { 
    
   })) */
}).on('error', console.error);

//shemotavazebuli varianti
/*
var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/