var net = require('net')  
var dateTime = require('node-datetime');


//console.log(strftimeCEST('%F %H:%M', dt));

var server = net.createServer(function (socket) {  
  // socket handling logic  
  //YYYY-MM-DD hh:mm
  var dt = dateTime.create();
  console.log(dt.format('Y-m-d H:M'));
  socket.write(dt.format('Y-m-d H:M') + '\n');
  socket.end();
})  
server.listen(process.argv[2])  