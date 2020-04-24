import React from 'react';
import { Container } from 'react-bootstrap';
import PageNumber from './../../../components/atoms/PageNumber';
import SvgBackbutton from './../../../components/svg/Backbutton';
import { HashLink as Link } from 'react-router-hash-link';


// components

class IntroPlantacle extends React.Component {
  render() {
    return (
        <section className="intro-plantacle" id="plantacle1">

                <Link to="/#section1" className="intro-plantacle__svg-wrapper">
                    <SvgBackbutton> </SvgBackbutton>
                </Link>
                <div className="intro-plantacle__pagenumber-wrapper">
                    <PageNumber title="plantacle" count="02.1"> </PageNumber>
                </div>



            <h2 className="intro-plantacle__title--mobile"> Plantacle </h2>

            <div className="intro-plantacle__img-wrapper">
                <div className="intro-plantacle__img"> </div>
            </div>

            <div className="intro-plantacle__text-block">
                <div className="intro-plantacle__text-wrapper">
                    <h2 className="intro-plantacle__title--desktop"> Plantacle </h2>
                    <p className="intro-plantacle__text">
                    The concept is a compact, smart composting module that is used in combination with a web app to track the status of the compost bins located in Blue City, Rotterdam. The module can be placed in the compost bins with the aim of managing the bin. With sensors measurements can be made in the compost bin that read the temperature, humidity and emissions of methane gas in the web app. It will let you know which tasks you need to complete in order to maintain the compost bin.
                    </p>
                </div>
            </div>

        </section>
    )
  }
}

export default IntroPlantacle;
