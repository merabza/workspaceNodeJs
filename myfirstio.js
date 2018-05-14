var fs = require('fs');
//var buffer = require('buffer');

//console.log(process.argv[2]);

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();

console.log(str.split('\n').length-1);