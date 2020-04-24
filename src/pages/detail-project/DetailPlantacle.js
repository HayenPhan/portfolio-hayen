import React from 'react';
import { Container } from 'react-bootstrap';



// components
import Intro from './sections/Intro';
import PhasesPlantacle from './sections/PhasesPlantacle';
import Wireframes from './sections/Wireframes';


class DetailPlantacle extends React.Component {
  render() {
    return (
      <Container fluid>
          <Intro />
          <PhasesPlantacle />
          <Wireframes />
      </Container>
    )
  }
}

export default DetailPlantacle;
