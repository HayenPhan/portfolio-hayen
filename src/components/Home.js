import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <Container fluid>
          <section className="home">
              <div className="home__slime"> </div>
              <Row className="home__menu">
                      <Col xs={4} md={1} className="home__menu--item"> contact </Col>
                      <Col xs={4} md={1} className="home__menu--item"> projects </Col>
                      <Col xs={4} md={1} className="home__menu--item"> intro </Col>
              </Row>
              <div className="home__info--wrapper">
                      <Row className="home__info">
                          <div className="home__info--name-wrapper">
                              <Col className="home__info--name"> HAYEN </Col>
                              <Col className="home__info--lastname"> PHAN </Col>
                          </div>
                          <Col className="home__info--spec">
                              <div className="home__specialization">
                                  <p className="home__specialization-title"> UI/UX </p>
                              </div>
                          </Col>
                          <Col className="home__info--arrow">
                          </Col>
                      </Row>
              </div>
          </section>
      </Container>
    )
  }
}

export default Home;
