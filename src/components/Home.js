import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SvgArrowDown from './svg/ArrowDown';

// components

import Start from './Start';
import Intro from './Intro';


class Home extends React.Component {
  render() {
    return (
      <Container fluid>
          <Start> </Start>
          <Intro></Intro>
      </Container>
    )
  }
}

export default Home;
