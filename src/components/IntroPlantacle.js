import React from 'react';
import { Container } from 'react-bootstrap';
import PageNumber from './PageNumber';
import SvgBackbutton from './svg/Backbutton'


// components


class IntroPlantacle extends React.Component {
  render() {
    return (
        <section className="intro-plantacle">
            <div className="intro-plantacle__left">
                <div className="intro-plantacle__svg-wrapper">
                    <SvgBackbutton> </SvgBackbutton>
                </div>
                <div className="intro-plantacle__pagenumber-wrapper">
                    <PageNumber title="plantacle" count="02.1"> </PageNumber>
                </div>
            </div>
        </section>
    )
  }
}

export default IntroPlantacle;
