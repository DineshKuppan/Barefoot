/* eslint-disable */
import React, {Component} from 'react';
import SearchResultList from './app/components/SearchResultList';
//import * as dbIntegration from './../../../services/dbIntegration';
import axios from 'axios';

import {Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table} from 'reactstrap';

class Results extends Component {

  constructor(props) {
    console.info('Inside constructor');
    super(props);
    /*this.state = {
      searchResults:{
        fromDate: '2018-10-22 00:00:00',
        toDate: '2018-10-24 00:00:00'
      }
    };*/

    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  };

  findBusinessProducts() {
    console.info("Trying to fetch results from database");
    let findBusinessRules = cb => {
      console.log("Accessing the Results page");
      console.log("Requests");
      var values = [];
      let sql = "SELECT * from beer";
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
    };
    console.log('Results Matching');
  }

  findDineshResults(){
    axios.get('http://10.1.75.141:4000/accessdata')
      .then(res => {
        console.log(res.data.rows)
        const posts = Object.values(res.data.rows).map(obj => obj);
        this.setState({
          posts: posts,
          loading: false,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        });
      });
  }

  componentDidMount() {
    this.findDineshResults();
    console.log('Inside Component Mount');
  }

  dbCallAction(sql, cb) {
    var conString = "postgres://postgres:admin@localhost/belgianbeers";
    let pg = pg;
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
        cb(err, result);
        //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
        client.end();
      });
    });
  }

  findProducts(){
    console.log('Inside FindProducts method');
    accessserver.findAll(function(err, dbResponse){
      if(err){
        console.log('Error: '+err)
        console.log('Error Name : '+err.name)
      }
      else{
        console.log(dbResponse);
      }
    })
      .then(res => {
        console.log('Response => ');
        console.log(res);
        const tableData = res.data.value;
        this.setState({tableData});
      });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Search Results
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Brewery</th>
                    <th>Alcohol (%)</th>
                    <th>Image</th>
                  </tr>
                  </thead>
                  <SearchResultList results={this.state.posts} test="Dinesh"/>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Results;
