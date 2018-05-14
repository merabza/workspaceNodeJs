var fs = require('fs');
var path = require('path');

module.exports = function (pathname, extension, callback) {  
  var exttolist = '.' + extension;
  fs.readdir(pathname, function(err, files){
    if (err) 
      return callback(err);
    var retarr = [];
    for (var i = 0; i< files.length; i++) {
      if ( path.extname(files[i]) === exttolist )
        retarr.push(files[i]);
    }
    callback(null, retarr);
  })
};
