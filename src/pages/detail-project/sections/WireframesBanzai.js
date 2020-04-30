import React from 'react';
import PageNumber from './../../../components/atoms/PageNumber';

// components

class WireframesBanzai extends React.Component {
  render() {
    return (
        <section className="wireframes-banzai">
            <div className="wireframes-plantacle__pagenumber-wrapper">
                <PageNumber title="banzai" count="01.2" className="wireframes-plantacle__pagenumber"> </PageNumber>
            </div>

            <div className="wireframes-banzai__blocks-wrapper">
                <div className="wireframes-banzai__block">
                    <h5 className="wireframes-banzai__block-title"> LOGIN </h5>
                    <div className="wireframes-banzai__wireframe wireframes-banzai__wireframe1"></div>
                </div>
                <div className="wireframes-banzai__block">
                    <h5 className="wireframes-banzai__block-title"> HOME </h5>
                    <div className="wireframes-banzai__wireframe wireframes-banzai__wireframe2"> </div>
                </div>
                <div className="wireframes-banzai__block">
                      <h5 className="wireframes-banzai__block-title"> SCHEDULE </h5>
                    <div className="wireframes-banzai__wireframe wireframes-banzai__wireframe3"> </div>
                </div>
                <div className="wireframes-banzai__block">
                    <h5 className="wireframes-banzai__block-title"> REQUESTS </h5>
                    <div className="wireframes-banzai__wireframe wireframes-banzai__wireframe4"></div>
                </div>
            </div>

        </section>
    )
  }
}

export default WireframesBanzai;
