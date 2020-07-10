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
           text="Banzai scheduler is a planning system for sushi restaurant Banzai located in Tilburg. They indicated that they had problems scheduling their employees and wanted to have a better overview of the holidays that have been requested by the employees. The admin has a separate account where they can schedule employees and accept, decline or edit holiday requests. The employee can submit a request and view their holiday requests but are not allowed to edit or delete requests."
           countTitle="banzai"
           count="0.2.1"
           id="banzai1"
           githubLink="https://github.com/HayenPhan/banzai-scheduler"
          />

          <Role
            role="Back-end, Design"
            responsibility="I designed the low and high fidelity wireframes and set up the database with mysql. I build the banzai planner with PHP and Sass and linked the database to show the user information about their vacation requests. The user can submit a request and view their holiday requests. The admin can view, edit and delete the holiday requests."
            build="PHP, mySQL, Sass"
            project="Banzai"
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
