let pg = require('pg')
console.info('Trying to fetch results from database');
let findAll = (cb) => {
  console.log('Accessing the Results page');
  console.log('Requests');
  var values = [];
  let sql = "SELECT * from beer";
  dbCallAction(sql, cb)
};

function dbCallAction(sql, cb){
  var conString = "postgres://postgres:admin@localhost/belgianbeers";

  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query(sql, function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result);
      cb(err,result);
      //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
      client.end();
    });
  })
}

exports.findAll = findAll;
