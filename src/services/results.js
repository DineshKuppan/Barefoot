"use strict";

let db = require('./pghelper');

//let escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

let findAll = (req, res, next) => {

  console.log('Accessing the Results page');
  console.log('Requests');
  console.log(req)

  var values = [];

  let sql = "SELECT * from beer";

      db.query(sql, values)
        .then(products => {
          return res.json({"results": products});
        })
        .catch(next);
};

exports.findAll = findAll;
