import React from 'react';
import { Container } from 'react-bootstrap';



// components
import IntroPlantacle from './IntroPlantacle';
import PhasesPlantacle from './PhasesPlantacle';


class DetailPlantacle extends React.Component {
  render() {
    return (
      <Container fluid>
          <IntroPlantacle />
          <PhasesPlantacle />
      </Container>
    )
  }
}

export default DetailPlantacle;
