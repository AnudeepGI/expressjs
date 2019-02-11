var express = require('express');
var app = express();

app.get('/', function(req, res){
  console.log('hello world');
});

app.listen(9000, () => {
  return console.log(`Example app listening on port`);
});
