import React from 'react';
import { Container } from 'react-bootstrap';



// components
import IntroPlantacle from './IntroPlantacle';


class DetailPlantacle extends React.Component {
  render() {
    return (
      <Container fluid>
          <IntroPlantacle />
      </Container>
    )
  }
}

export default DetailPlantacle;
