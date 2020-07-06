import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageNumber from './../../../components/atoms/PageNumber';

const Intro = () => {
    return(
        <section className="intro" id="section2">
            <div className="intro__pagenumber--wrapper">
                <PageNumber title="about me" count="01"> </PageNumber>
            </div>
            <div className="intro__image-wrapper">
                <div className="intro__frame">
                </div>
            </div>
            <div className="intro__text-wrapper">

              <div className="intro__content-wrapper">
                <p className="intro__title"> Hi, </p>
                <p className="intro__text"> My name is Hayen. Currently I am studying Mediatechnology, specializing in front-end development. Lately I have discovered my passion for UI/UX design. In the future I would like to become the glue between design and engineering. </p>
              </div>
            </div>
        </section>
    )
};

export default Intro;
