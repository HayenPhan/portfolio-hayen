import React from 'react';
import { Container } from 'react-bootstrap';

// components

import Intro from './sections/Intro';



class DetailBanzai extends React.Component {
  render() {
    return (
      <Container fluid>
          <Intro title="Banzai" />
      </Container>
    )
  }
}

export default DetailBanzai;
