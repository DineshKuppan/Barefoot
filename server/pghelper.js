"use strict";

let pg = require('pg'),
    config = require('./config'),
    databaseURL = config.databaseURL;

const config = {
  user: 'postgres',
  database: 'postgres',
  password: 'admin',
  port: 5432,
  idleTimeoutMillis: 30000
};

// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);

exports.query = function (sql, values, singleItem, dontLog) {

    if (!dontLog) {
        console.log(sql, values);
    }

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
            }
            catch (e) {
                done();
                reject(e);
            }
        });

    });

};
