import React from 'react';
import Button from './../atoms/Button';

const ProjectText = (props) => {
    return(
      <div className="project__text-wrapper">
          <h2 className="project__title--desktop"> {props.title} </h2>
          <h2 className="project__text"> {props.text} </h2>
          <div className="project__button-wrapper">
              <Button />
          </div>
      </div>
    )
};

export default ProjectText;
