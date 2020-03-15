import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <Container fluid>
          <Row className="home">
              <div className="home__slime"> </div>
              <div className="home__menu">
                  <ul className="home__menu--list">
                      <li className="home__menu--item"> intro </li>
                      <li className="home__menu--item"> projects </li>
                      <li className="home__menu--item"> contact </li>
                  </ul>
              </div>
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
          </Row>
      </Container>
    )
  }
}

export default Home;
