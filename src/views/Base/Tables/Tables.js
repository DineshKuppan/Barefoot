/* eslint-disable */
import React, {Component} from 'react';
import SearchResultList from './app/components/SearchResultList';
//import * as dbIntegration from './../../../services/dbIntegration';

import accessserver from './accessserver/';

import {Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table} from 'reactstrap';

class Tables extends Component {

  constructor(props) {
    console.info('Inside constructor');
    super(props);
    this.state = {
      searchResults:{
        fromDate: '2018-10-22 00:00:00',
        toDate: '2018-10-24 00:00:00'
      }
    };
  }

  componentDidMount() {
    //this.findProducts();
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
                <i className="fa fa-align-justify"></i> Bordered Table
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
                </Table>
                <Pagination>
                  <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tables;
