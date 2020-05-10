import React from 'react';
import { Container } from 'react-bootstrap';
import PageNumber from './../../../components/atoms/PageNumber';
import SvgBackbutton from './../../../components/svg/Backbutton';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

import imgDetailPlantacle from './../../../images/tropicana.jpg';
import imgDetailBanzai from './../../../images/banzai.jpg';

const DetailImg = styled.div`
    background-image: url(${props => props.title === 'Plantacle' ? imgDetailPlantacle : imgDetailBanzai});
    background-size: 281px 130px;
    background-repeat: no-repeat;
    width: 281px;
    height: 130px;
    margin: 0 auto;
    //background-color:grey;

    @media (min-width: 500px) {
        background-size: 351px 180px;
        background-repeat: no-repeat;
        width: 351px;
        height: 180px;
    }

    @media (min-width: 768px) {
        background-size: 550px 250px;
        background-repeat: no-repeat;
        width: 550px;
        height: 250px;
    }

    @media (min-width: 1024px) {
        background-size: 500px 250px;
        background-repeat: no-repeat;
        width: 500px;
        height: 250px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media (min-width: 1200px) {
        background-size: 600px 310px;
        background-repeat: no-repeat;
        width: 600px;
        height: 310px;
        left: 50%;
        top: 55%;
    }
`;

class Intro extends React.Component {
  render(props) {
    return (
        <section className="intro-detail" id={this.props.id}>
                <Link to="/#section1" className="intro-detail__svg-wrapper">
                    <SvgBackbutton> </SvgBackbutton>
                </Link>
                <div className="intro-detail__pagenumber-wrapper">
                    <PageNumber title={this.props.countTitle} count={this.props.count}> </PageNumber>
                </div>
            <h2 className="intro-detail__title--mobile"> {this.props.title} </h2>

            <div className="intro-detail__img-wrapper">
                <DetailImg title={this.props.title}/>
            </div>

            <div className="intro-detail__text-block">
                <div className="intro-detail__text-wrapper">
                    <h2 className="intro-detail__title--desktop"> {this.props.title} </h2>
                    <p className="intro-detail__text">
                      {this.props.text}
                    </p>
                </div>
            </div>
        </section>
    )
  }
}

export default Intro;
