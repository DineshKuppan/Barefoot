"use strict";

let db = require('./pghelper');

let escape = s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

let findAll = (req, res, next) => {

  let countSql = "SELECT * from beer";

  let values=[];
      db.query(countSql, values)
        .then(products => {
          return res.json({"products": products});
        })
        .catch(next);
    };
exports.findAll = findAll;
