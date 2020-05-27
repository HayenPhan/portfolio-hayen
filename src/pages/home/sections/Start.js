import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SvgArrowDown from './../../../components/svg/ArrowDown';
import { HashLink as Link } from 'react-router-hash-link';

const Start = () => {
    return(
        <section className="home" id="section1">
            <div className="home__slime"> </div>
            <div className="home__menu">
                <ul className="home__menu--list">
                    <li className="home__menu--item"> <Link className="home__menu--link" to="#section2"> intro </Link> </li>
                    <li className="home__menu--item"> <Link className="home__menu--link" to="#section3"> projects </Link> </li>
                </ul>
            </div>
            <div className="home__info--wrapper">
                    <Row className="home__info">
                        <div className="home__info--name-wrapper">
                            <Col className="home__info--name"> HAYEN </Col>
                            <Col className="home__info--lastname"> PHAN </Col>
                        </div>
                        <Col className="home__info--spec">
                            <div className="home__specialization">
                                <p className="home__specialization-title"> front-end </p>
                            </div>
                        </Col>
                    </Row>
            </div>
            <div className="home__redirect">
                <p className="home__redirect--title"> about me </p>
                <div className="home__redirect--arrow-wrapper">
                    <SvgArrowDown className="home__redirect--arrow"> </SvgArrowDown>
                </div>
            </div>
        </section>
    )
};

export default Start;
