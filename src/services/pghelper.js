"use strict";

let pg = require('pg'),
  config = require('./config'),
  databaseURL = config.databaseURL;
console.info('PostGres Database Connection enabling');
// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);
console.info('Postgres SQL Connected');
exports.query = function (sql, values, singleItem, dontLog) {

  if (!dontLog) {
    console.log(sql, values);
  }
  console.info('psql - query ' + sql);
  return new Promise((resolve, reject) => {

    pg.connect(databaseURL, function (err, conn, done) {
      if (err) return reject(err);
      try {
        conn.query(sql, values, function (err, result) {
          done();
          if (err) {
            reject(err);
          } else {
            resolve(singleItem ? result.rows[0] : result.rows);
          }
        });
      } catch (e) {
        done();
        reject(e);
      }
    });

  });

};
