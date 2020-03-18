import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageNumber from './PageNumber';

const Intro = () => {
    return(
        <section className="intro">
            <div className="intro__pagenumber--wrapper">
                <PageNumber title="about me" count="01"> </PageNumber>
            </div>
            <div className="intro__image-wrapper">
                <div className="intro__frame">
                </div>
            </div>
            <div className="intro__text-wrapper">
            
              <p className="intro__title"> Hi, </p>
              <p className="intro__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis libero dolor, non placerat erat malesuada id. Mauris interdum blandit nibh. Quisque ut sapien ac risus viv </p>

            </div>
        </section>
    )
};

export default Intro;
