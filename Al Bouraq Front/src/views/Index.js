import React, { useEffect, useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";

import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";


import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);

  const [family, setData] = useState({info: []});

  useEffect(() => {
    fetch(
      'http://127.0.0.1:8000/api/families-major',
    ).then(res => setData(res.data));
  });

console.log(family)

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--9" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Appointments for (insert today's date)</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Interviewee</th>
                    <th scope="col">Interviewer</th>
                    <th scope="col">Location</th>
                    <th scope="col">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {family.map(item.data, key =>  ( */}
                  {/* <tr key={key}>
                  <th scope="row">{item.data.family_name}</th>
                  <td>{item.data.interviewer}</td>
                  <td>{item.data.area}</td>
                  <td> */}
                    {/* <i className="fas fa-arrow-up text-success mr-3" />  */}
                    {/* {item.data.created_at} */}
                  {/* </td>
                </tr> */}
                                  <tr>
                                  <th scope="row">blah</th>
                                  <td>blah</td>
                                  <td>blah</td>
                                  <td>
                                    {/* <i className="fas fa-arrow-up text-success mr-3" />  */}
                                    blah
                                  </td>
                                </tr>
                  // ))}

                </tbody>
              </Table>
            </Card>
          </Col>
         
        </Row>
      </Container>
    </>
  );
};

export default Index;
