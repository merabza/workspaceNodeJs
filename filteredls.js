var fs = require('fs');
var path = require('path');

var exttolist = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, files){
  //console.log('callback');
  if (err) 
    return console.error(err);
  //console.log('files.length=' + files.length);
  for (var i = 0; i< files.length; i++) {
    //console.log(files[i]);
    if ( path.extname(files[i]) === exttolist )
      console.log(files[i]);
  }
})