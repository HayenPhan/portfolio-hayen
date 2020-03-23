import React from 'react';
import { Container } from 'react-bootstrap';
import PageNumber from './PageNumber';


// components


class IntroPlantacle extends React.Component {
  render() {
    return (
        <section className="phases-plantacle">
            <div className="phases-plantacle__pagenumber-wrapper">
                <PageNumber title="plantacle" count="02.2" className="phases-plantacle__pagenumber"> </PageNumber>
            </div>

            <div className="phases-plantacle__title-wrapper">
                <h2 className="phases-plantacle__title"> Phases </h2>
            </div>

            <div className="phases-plantacle__bins-wrapper">
                <div className="phases-plantacle__bin">
                    <h5 className="phases-plantacle__bin-title"> PHASE 1 </h5>
                    <div className="phases-plantacle__bin1-img">
                    </div>
                    <p className="phases-plantacle__text--desktop"> In the web-app the compost bin will show up in the right phase based on the day, temperature, humidity and the methane emissions in the bin. </p>
                </div>
                <div className="phases-plantacle__bin">
                    <h5 className="phases-plantacle__bin-title"> PHASE 2 </h5>
                    <div className="phases-plantacle__bin2-img"> </div>
                </div>
                <div className="phases-plantacle__bin">
                    <h5 className="phases-plantacle__bin-title"> PHASE 3 </h5>
                    <div className="phases-plantacle__bin3-img"> </div>
                </div>
                <div className="phases-plantacle__bin">
                    <h5 className="phases-plantacle__bin-title"> PHASE 4 </h5>
                    <div className="phases-plantacle__bin4-img"> </div>
                </div>

            </div>

            <div className="phases-plantacle__text-wrapper">
                <p className="phases-plantacle__text"> In the web-app the compost bin will show up in the right phase based on the day, temperature, humidity and the methane emissions in the bin. </p>
            </div>

        </section>
    )
  }
}

export default IntroPlantacle;
