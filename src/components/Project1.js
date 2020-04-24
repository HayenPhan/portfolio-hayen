import React from 'react';
import PageNumber from './PageNumber';
import Mockup from './atoms/Mockup';
import ProjectText from './molecules/ProjectText';

const Project1 = () => {
    return(
        <section className="project" id="section3">
            <div className="project__pagenumber--wrapper">
                <PageNumber title="plantacle" count="02"> </PageNumber>
            </div>
            <h2 className="project__title"> Plantacle </h2>
            <Mockup />
            <div className="project__right-block">
                <ProjectText />
            </div>

        </section>
    )
};

export default Project1;
