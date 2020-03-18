import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SvgArrowDown from './svg/ArrowDown';


// components

import Start from './Start';
import Intro from './Intro';
import Project1 from './Project1';


class Home extends React.Component {
  render() {
    return (
      <Container fluid>
          <Start> </Start>
          <Intro></Intro>
          <Project1> </Project1>
      </Container>
    )
  }
}

export default Home;
