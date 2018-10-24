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
  }

  findDineshResults(){
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const posts = Object.entries(res.data).map(obj => obj);
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
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
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
