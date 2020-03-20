import React from 'react';
import PageNumber from './PageNumber';
import SvgButton from './svg/Button';

const Project1 = () => {
    return(
        <section className="firstproject">
            <div className="firstproject__pagenumber--wrapper">
                <PageNumber title="plantacle" count="02"> </PageNumber>
            </div>
                <h2 className="firstproject__title"> Plantacle </h2>


            <div className="firstproject__mockup-wrapper">
                <div className="firstproject__mockup">
                </div>
            </div>


            <div className="firstproject__right-block">
                <div className="firstproject__text-wrapper">
                    <h2 className="firstproject__title--desktop"> Plantacle </h2>
                    <h2 className="firstproject__text"> An app for monotoring the compost process in smaller households. </h2>
                    <div className="firstproject__button-wrapper">
                        <SvgButton className="firstproject__button">
                        </SvgButton>
                        <p className="firstproject__button-text"> Read more! </p>
                    </div>
                </div>
            </div>

        </section>
    )
};

export default Project1;
