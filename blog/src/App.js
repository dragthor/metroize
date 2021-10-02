import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './App.css';;

function App() {
  return (
    <Container>
      <Jumbotron>
        <h1 className="header">metroize</h1>
      </Jumbotron>
      <Row>
        <Col style={{ "text-align": "center" }}>This is my blog.</Col>
      </Row>
    </Container>
  );
}

export default App;
