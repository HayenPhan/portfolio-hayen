import React from 'react';
import { Container } from 'react-bootstrap';



// components
import IntroPlantacle from './IntroPlantacle';
import PhasesPlantacle from './PhasesPlantacle';
import WireframesPlantacle from './WireframesPlantacle';


class DetailPlantacle extends React.Component {
  render() {
    return (
      <Container fluid>
          <IntroPlantacle />
          <PhasesPlantacle />
          <WireframesPlantacle />
      </Container>
    )
  }
}

export default DetailPlantacle;
