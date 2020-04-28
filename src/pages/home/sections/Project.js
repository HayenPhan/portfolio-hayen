import React from 'react';
import PageNumber from './../../../components/atoms/PageNumber';
import Mockup from './../../../components/atoms/Mockup';
import ProjectText from './../../../components/molecules/ProjectText';

const Project = (props) => {
    return(
        <section className="project" id="section3">
            <div className="project__pagenumber--wrapper">
                <PageNumber title="plantacle" count="02"> </PageNumber>
            </div>
            <h2 className="project__title"> {props.title} </h2>
            <Mockup title={props.title} widthPlantacle={props.widthPlantacle} widthBanzai={props.widthBanzai} heightPlantacle={props.heightPlantacle} heightBanzai={props.heightBanzai}> </Mockup>
            <div className="project__right-block">
                <ProjectText title={props.title} text={props.text}> </ProjectText>
            </div>

        </section>
    )
};

export default Project;
