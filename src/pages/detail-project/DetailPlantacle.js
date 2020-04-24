import React from 'react';
import { Container } from 'react-bootstrap';



// components
import IntroPlantacle from './sections/IntroPlantacle';
import PhasesPlantacle from './sections/PhasesPlantacle';
import WireframesPlantacle from './sections/WireframesPlantacle';


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
