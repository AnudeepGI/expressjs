var express = require('express');
var app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require('./routes/router');

app.use('/', router);

app.listen(9000, () => {
  return console.log(`Example app listening on port`);
});
