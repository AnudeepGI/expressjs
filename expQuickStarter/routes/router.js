var express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  console.log('hello world');
});

module.exports = router;
