var fs = require('fs');
//var buffer = require('buffer');

//console.log(process.argv[2]);

var buf = fs.readFile(process.argv[2], 'utf8', function(err, data){
  if (err) 
    return console.error(err);
  console.log(data.split('\n').length-1);
});

