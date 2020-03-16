import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageNumber from './PageNumber';

const Intro = () => {
    return(
        <section className="intro">
            <div className="intro__pagenumber--wrapper">
                <PageNumber> </PageNumber>
            </div>
            <div className="intro__image-wrapper">

            </div>
            <div className="intro__text-wrapper">

            </div>
        </section>
    )
};

export default Intro;
