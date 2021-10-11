import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import  {withRouter}  from "react-router";
import Sidebar from "/Users/abdulazeezibrahim/Desktop/WEB DEV./React/my-app/src/Components/Sidebar.js";
import './style/Dashboard.css'

const Dash = props => {
   

    return (
        <>
         <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        this is a test
                    </Col> 
                </Row>

            </Container>
        </>
        );
  };
  const Dashboard = withRouter(Dash);
  export default Dashboard