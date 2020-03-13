import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SvgFigure1 from './svg/Figure1';

class Home extends React.Component {
  render() {
    return (
      <Container fluid>
          <Row className="home">
          <div className="home__slime"> </div>
              <Col xs={12}>
                  <Row className="home__menu">
                      <Col xs={4}> intro </Col>
                      <Col xs={4}> projects </Col>
                      <Col xs={4}> contact </Col>
                  </Row>
              </Col>
              <Col xs={12}>
                  Hayen Phan
              </Col>
              <Col xs={12}>
                  Ux/Ui
              </Col>
          </Row>
      </Container>
    )
  }
}

export default Home;
