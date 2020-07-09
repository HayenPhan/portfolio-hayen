import React from 'react';
import { Container } from 'react-bootstrap';

// components

import Intro from './sections/Intro';
import WireframesDesktop from './sections/WireframesDesktop';
import Role from './sections/Role';



class DetailBanzai extends React.Component {
  render() {
    return (
      <Container fluid>
          <Intro title="Banzai"
           text="For this school assignment I decided to develop a reservation system for a sushi restaurant called Banzai. They indicated that they had problems scheduling their employees and wanted to get a better overview of the holidays that have been requested. The admin has a separate account where they can schedule employees and accept or decline vacation requests and the user can submit a request and view their holiday requests."
           countTitle="banzai"
           count="0.2.1"
           id="banzai1"
           githubLink="https://github.com/HayenPhan/banzai-scheduler"
          />

          <Role
            role="Back-end, Design"
            responsibility="I made the low and high fidelity wireframes and set up the database with mysql. I’ve build the banzai planner with PHP and Sass and linked the database to show the user information about the vacation requests. The user can submit a request and view their holiday requests. The admin can view, edit and delete the holiday requests."
            build="PHP, mySQL, Sass"
          />

          <WireframesDesktop
            countTitle="banzai"
            count="0.2.2"
            title="Banzai"
          />
      </Container>
    )
  }
}

export default DetailBanzai;
