var http = require('http')
var bl = require('bl')

var finishedCount = 0;
var responces = []


function saveResponce(index) {
  http.get(process.argv[index+2], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      responces[index] = data.toString();
      finishedCount++;
      if (finishedCount == 3)
        for ( var i = 0; i < 3; i ++)
          console.log(responces[i]);
    }));
  });
}

for ( var i = 0; i < 3; i ++) {
  saveResponce(i);
}