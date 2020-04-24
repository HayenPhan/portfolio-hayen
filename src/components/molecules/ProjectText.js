import React from 'react';
import Button from './../atoms/Button';

const ProjectText = () => {
    return(
      <div className="project__text-wrapper">
          <h2 className="project__title--desktop"> Plantacle </h2>
          <h2 className="project__text"> An app for monotoring the compost process in smaller households. </h2>
          <div className="project__button-wrapper">
              <Button />
          </div>
      </div>
    )
};

export default ProjectText;
