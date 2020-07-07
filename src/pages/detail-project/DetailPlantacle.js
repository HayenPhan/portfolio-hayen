import React from 'react';
import { Container } from 'react-bootstrap';



// components
import Intro from './sections/Intro';
import PhasesPlantacle from './sections/PhasesPlantacle';
import Wireframes from './sections/Wireframes';
import Role from './sections/Role';


class DetailPlantacle extends React.Component {
  render() {
    return (
      <Container fluid>
          <Intro
           title="Plantacle"
           text="The concept is a compact, smart composting module that is used in combination with a web app to track the status of the compost bins located in Blue City, Rotterdam. The module can be placed in the compost bins with the aim of managing the bin. With sensors measurements can be made in the compost bin that read the temperature, humidity and emissions of methane gas in the web app. It will let you know which tasks you need to complete in order to maintain the compost bin."
           countTitle="plantacle"
           count="0.1.1"
           githubLink="https://github.com/HayenPhan/plantacle"
           id="plantacle1"
           >
          </Intro>
          <Role
            role="Front-end developer, Designer"
            responsibility="It was my responsibility to read the sensor data in the front-end. I then used this data to write the logic for the different stages of the compost. I have also programmed the tasks that appear based on the stage of the compost. I also styled the website with sass and for the design part I made the high fidelity wireframes and illustrations of the compost bins."
            build="React.js, Sass"
          />
          <PhasesPlantacle />
          <Wireframes />
      </Container>
    )
  }
}

export default DetailPlantacle;
