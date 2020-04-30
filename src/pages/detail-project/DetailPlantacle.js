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
          <Intro
           title="Plantacle"
           text="The concept is a compact, smart composting module that is used in combination with a web app to track the status of the compost bins located in Blue City, Rotterdam. The module can be placed in the compost bins with the aim of managing the bin. With sensors measurements can be made in the compost bin that read the temperature, humidity and emissions of methane gas in the web app. It will let you know which tasks you need to complete in order to maintain the compost bin."
           countTitle="plantacle"
           count="0.1.1"
           >
          </Intro>
          <PhasesPlantacle />
          <Wireframes />
      </Container>
    )
  }
}

export default DetailPlantacle;
