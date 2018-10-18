var express = require('express');
var router = express.Router();

router.get('/users', function (req, res, next) {
  res.locals.connection.query('select * from beer', function (error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});
