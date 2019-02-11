var express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  console.log('hello world');
});

router.post('/checkpost', function(req, res){
  console.log(req.body.testval);
});

module.exports = router;
