import React from 'react';
import { Container } from 'react-bootstrap';

// components

import Intro from './sections/Intro';
import WireframesDesktop from './sections/WireframesDesktop';
import Role from './sections/Role';

class DetailILE extends React.Component {
  render() {
    return (
      <Container fluid>
          <Intro title="I.L.E"
           text="The I.L.E Erasmus website was developed for Erasmus University medical students. ErasmusMC teachers indicated that the students had problems with studying the anatomy of the female pelvis. For the sake of effective hands-on learning they practice on cadavers that are used in the anatomy classes. As the students go through the cadaver labs they have difficulties comparing the images in the book with the cadavers in the lab. The purpose of this app is to map and visualize the female pelvis as clearly as possible in 3D and shows detailed information. It is also possible to move the 3D views using a controller. Parts such as the uterus can be removed from the controller and is shown in the front-end."
           countTitle="i.l.e"
           count="0.3.1"
           id="banzai1"
           githubLink="https://github.com/ErasmusTeam3A/ILE-Erasmus"
          />
          <Role
            role="Front-end developer"
            responsibility="It was my responsibility to show and move the 3D objects of the body and pelvis with the Three.js library. I also programmed the camera positions of the 3D objects and the change between filters. The physical controller uses two sensors: The Gyroscope and the Accelerometer. I used these values ​​to make the 3D objects move with the controller."
            build="React.js, Three.js, Sass"
            project="Banzai"
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
