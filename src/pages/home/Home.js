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
          <Project
            title="Plantacle"
            text=" An app for monotoring the compost process in smaller households."
            count="01"
            widthPlantacle="608px"
            heightPlantacle="597px"
            topXxs="1670px"
            topXs="1750px"
            topSm="2050px"
            topMd="1300px"
            topLg="1400px"
            >
          </Project>
          <Project
            className="projectbanzai"
            title="Banzai"
            text="An app for employees and managers to manage vacation days"
            count="02"
            widthBanzai="708px"
            heightBanzai="697px"
            topXxs="2500px"
            topXs="2680px"
            topSm="3050px"
            topMd="1300px"
            topLg="1400px"
            >
            </Project>
      </Container>
    )
  }
}

export default Home;
