import React from 'react';
import { Container } from 'react-bootstrap';
import PageNumber from './../../../components/atoms/PageNumber';
import SvgBackbutton from './../../../components/svg/Backbutton';
import { HashLink as Link } from 'react-router-hash-link';


// components

class Intro extends React.Component {
  render(props) {
    return (
        <section className="intro-plantacle" id="plantacle1">

                <Link to="/#section1" className="intro-plantacle__svg-wrapper">
                    <SvgBackbutton> </SvgBackbutton>
                </Link>
                <div className="intro-plantacle__pagenumber-wrapper">
                    <PageNumber title="plantacle" count="02.1"> </PageNumber>
                </div>
            <h2 className="intro-plantacle__title--mobile"> {this.props.title} </h2>

            <div className="intro-plantacle__img-wrapper">
                <div className="intro-plantacle__img"> </div>
            </div>

            <div className="intro-plantacle__text-block">
                <div className="intro-plantacle__text-wrapper">
                    <h2 className="intro-plantacle__title--desktop"> {this.props.title} </h2>
                    <p className="intro-plantacle__text">
                      {this.props.text}
                    </p>
                </div>
            </div>

        </section>
    )
  }
}

export default Intro;
