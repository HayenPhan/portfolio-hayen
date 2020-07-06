import React from 'react';
import { Container } from 'react-bootstrap';

// components

import Intro from './sections/Intro';
import WireframesBanzai from './sections/WireframesBanzai';

class DetailILE extends React.Component {
  render() {
    return (
      <Container fluid>
          <Intro title="I.L.E"
           text="The I.L.E Erasmus app has been developed for Medical students of the Erasmus University. The aim of the app is to map and visualize the female pelvis as clearly as possible for the medical students so they can use this app to study the anatomy of the female body"
           countTitle="i.l.e"
           count="0.2.1"
           id="banzai1"
           githubLink="https://github.com/HayenPhan/banzai-scheduler"
          />
          <WireframesBanzai />
      </Container>
    )
  }
}

export default DetailILE;
