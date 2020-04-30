import React from 'react';
import { Container } from 'react-bootstrap';

// components

import Intro from './sections/Intro';
import WireframesBanzai from './sections/WireframesBanzai';



class DetailBanzai extends React.Component {
  render() {
    return (
      <Container fluid>
          <Intro title="Banzai"
           text="Banzai is a planning system in which employees can view their planning and make vacation requests. The admin has a separate account where they can schedule employees and accept or decline vacation requests."
           countTitle="banzai"
           count="0.2.1"
          />
          <WireframesBanzai />
      </Container>
    )
  }
}

export default DetailBanzai;
