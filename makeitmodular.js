var dirfilter = require('./dirfilter.js');

var pathname = process.argv[2];
var extname = process.argv[3];

dirfilter(pathname, extname, function(err, files){
  if (err) 
    return console.error(err);
  for (var i = 0; i< files.length; i++) {
    console.log(files[i]);
  }
})