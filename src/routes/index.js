var express = require('express');
var router = express.Router();
var findAll = require("./../services/dbIntegration").findAll;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/results', function(req, res, next) {
  var response = findAll(function(err,dbResponse){
    if(err){
      res.json({error:err});
    }
    else{
      console.log(dbResponse);
      res.send(dbResponse)
    }
  });
});

module.exports = router;
