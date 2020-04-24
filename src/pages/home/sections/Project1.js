import React from 'react';
import PageNumber from './../../../components/atoms/PageNumber';
import Mockup from './../../../components/atoms/Mockup';
import ProjectText from './../../../components/molecules/ProjectText';

const Project1 = (props) => {
    return(
        <section className="project" id="section3">
            <div className="project__pagenumber--wrapper">
                <PageNumber title="plantacle" count="02"> </PageNumber>
            </div>
            <h2 className="project__title"> {props.title} </h2>
            <Mockup />
            <div className="project__right-block">
                <ProjectText title={props.title} text={props.text}> </ProjectText>
            </div>

        </section>
    )
};

export default Project1;
