import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SvgArrowDown from '../../components/svg/ArrowDown';


// components

import Start from './sections/Start';
import Intro from './sections/Intro';
import Project from './sections/Project';


class Home extends React.Component {
  render() {
    return (
      <Container fluid>
          <Start> </Start>
          <Intro></Intro>
          <Project title="Plantacle" text=" An app for monotoring the compost process in smaller households." widthPlantacle="608px" heightPlantacle="597px"> </Project>
          <Project title="Banzai" text="An app for employees and managers to manage vacation days" widthBanzai="708px" heightBanzai="697px"> </Project>
      </Container>
    )
  }
}

export default Home;
