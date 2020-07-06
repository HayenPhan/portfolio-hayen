import React from 'react';
import { Container } from 'react-bootstrap';

// components

import Intro from './sections/Intro';
import WireframesDesktop from './sections/WireframesDesktop';

class DetailILE extends React.Component {
  render() {
    return (
      <Container fluid>
          <Intro title="I.L.E"
           text="The I.L.E Erasmus app has been developed for Medical students of the Erasmus University. The aim of the app is to map and visualize the female pelvis as clearly as possible for the medical students so they can use this app to study the anatomy of the female body"
           countTitle="i.l.e"
           count="0.3.1"
           id="banzai1"
           githubLink="https://github.com/ErasmusTeam3A/ILE-Erasmus"
          />
          <WireframesDesktop
          countTitle="i.l.e"
          count="0.3.2"
          title="I.L.E"
          />
      </Container>
    )
  }
}

export default DetailILE;
