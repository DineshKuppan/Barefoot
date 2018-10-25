let pg = require('pg');

class AccessDatabaseModel {
  /**
   * class constructor
   * @param {object} data
   */
  constructor() {
    this.resultData = [];
  }

  fetchData(sql){
    console.log("Accessing the Results page");
    console.log("Requests");
    var values = [];
    var conString = "postgres://postgres:admin@localhost/belgianbeers";
    let pg = require('pg');
    var client = new pg.Client(conString);
    client.connect(function(err) {
      if (err) {
        return console.error("could not connect to postgres", err);
      }
      client.query(sql, function(err, result) {
        if (err) {
          return console.error("error running query", err);
        }
        console.log(result);
        //cb(err, result);
        //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
        client.end();
      });
    }).then(res => {
      console.log('Response Raw Data')
      console.log(res);
    });
  }
  /**
   *
   * @param {searchID} id
   * @returns {object} result object
   */
  findOne(id) {
    let sql = "SELECT * from beer where id='"+id+"'";
    this.resultData = this.fetchData(sql);
    return this.resultData.find(result => result.id === id);
  }
  /**
   * @returns {object} returns all resultData
   */
  findAll() {
    let sql = "SELECT * from beer where id>250 and id<255";
    this.resultData = this.fetchData(sql);
    return this.resultData;
  }

}
export default new AccessDatabaseModel();
