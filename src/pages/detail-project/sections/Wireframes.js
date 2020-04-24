import React from 'react';
import PageNumber from './../../../components/atoms/PageNumber';


// components

class WireframesPlantacle extends React.Component {
  render() {
    return (
        <section className="wireframes-plantacle">
            <div className="wireframes-plantacle__pagenumber-wrapper">
                <PageNumber title="plantacle" count="02.3" className="wireframes-plantacle__pagenumber"> </PageNumber>
            </div>

            <div className="wireframes-plantacle__blocks-wrapper">
                <div className="wireframes-plantacle__block">
                    <h5 className="wireframes-plantacle__block-title"> START </h5>
                    <div className="wireframes-plantacle__wireframe wireframes-plantacle__wireframe1"> </div>
                </div>

                <div className="wireframes-plantacle__block">
                    <h5 className="wireframes-plantacle__block-title"> OVERVIEW </h5>
                    <div className="wireframes-plantacle__wireframe wireframes-plantacle__wireframe2"> </div>
                </div>

                <div className="wireframes-plantacle__block">
                    <h5 className="wireframes-plantacle__block-title"> TASKS </h5>
                    <div className="wireframes-plantacle__wireframe wireframes-plantacle__wireframe3"> </div>
                </div>

                <div className="wireframes-plantacle__block">
                    <h5 className="wireframes-plantacle__block-title"> PROFILE </h5>
                    <div className="wireframes-plantacle__wireframe wireframes-plantacle__wireframe4"> </div>
                </div>
            </div>
        </section>
    )
  }
}

export default WireframesPlantacle;
