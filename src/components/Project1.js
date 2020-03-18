import React from 'react';
import PageNumber from './PageNumber';

const Project1 = () => {
    return(
        <section className="firstproject">
            <div className="firstproject__pagenumber--wrapper">
                <PageNumber title="plantacle" count="02"> </PageNumber>
            </div>
                <h2 className="firstproject__title"> Plantacle </h2>
            <div className="firstproject__mockup">
            </div>
                <h2 className="firstproject__title--desktop"> Plantacle </h2>
                <h2 className="firstproject__text"> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas dasdasdas.  </h2>
        </section>
    )
};

export default Project1;
