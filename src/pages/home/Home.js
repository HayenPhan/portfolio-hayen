import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SvgArrowDown from '../../components/svg/ArrowDown';


// components

import Start from './sections/Start';
import Intro from './sections/Intro';
import Project1 from './sections/Project1';


class Home extends React.Component {
  render() {
    return (
      <Container fluid>
          <Start> </Start>
          <Intro></Intro>
          <Project1 title="Plantacle" text=" An app for monotoring the compost process in smaller households."> </Project1>
      </Container>
    )
  }
}

export default Home;
