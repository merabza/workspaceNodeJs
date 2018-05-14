var express = require('express');

var app = express();

app.get('/search', function(req, res){
  res.send(req.query);
});

app.listen(process.argv[2]);


//node -pe "require('url').parse('/api/parsetime?iso=2013-08-10T12:10:15.474Z', true)"
//node -pe "require('url').parse('/search?results=recent&include_tabs=true', true)"