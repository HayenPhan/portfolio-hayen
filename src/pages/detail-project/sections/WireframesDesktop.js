import React from 'react';
import PageNumber from './../../../components/atoms/PageNumber';
import styled from 'styled-components';

// Banzai imports
import wireframeBanzai1 from './../../../images/wireframebanzai--1.jpg';
import wireframeBanzai2 from './../../../images/wireframebanzai--2.jpg';
import wireframeBanzai3 from './../../../images/wireframebanzai--3.jpg';
import wireframeBanzai4 from './../../../images/wireframebanzai--4.jpg';

// Banzai imports
import wireframeILE1 from './../../../images/wireframeile--1.jpg';
import wireframeILE2 from './../../../images/wireframeile--2.jpg';
import wireframeILE3 from './../../../images/wireframeile--3.jpg';
import wireframeILE4 from './../../../images/wireframeile--4.jpg';


// ILE imports

const Wireframe1 = styled.div`
    background-image: url(${props => props.title === 'Banzai' ? wireframeBanzai1 : props.title === 'I.L.E' ? wireframeILE1 : null });
`;

const Wireframe2 = styled.div`
    background-image: url(${props => props.title === 'Banzai' ? wireframeBanzai2 : props.title === 'I.L.E' ? wireframeILE2 : null });
`;

const Wireframe3 = styled.div`
    background-image: url(${props => props.title === 'Banzai' ? wireframeBanzai3 : props.title === 'I.L.E' ? wireframeILE3 : null });
`;

const Wireframe4 = styled.div`
    background-image: url(${props => props.title === 'Banzai' ? wireframeBanzai4 : props.title === 'I.L.E' ? wireframeILE4 : null });
`;


class WireframesDesktop extends React.Component {
  render(props) {
    return (
        <section className="wireframes-desktop">
            <div className="wireframes-plantacle__pagenumber-wrapper">
                <PageNumber title={this.props.countTitle} count={this.props.count} className="wireframes-plantacle__pagenumber"> </PageNumber>
            </div>

            <div className="wireframes-desktop__blocks-wrapper">
                <div className="wireframes-desktop__block">
                    <h5 className="wireframes-desktop__block-title"> LOGIN </h5>

                    <Wireframe1 title={this.props.title} className="wireframes-desktop__wireframe"/>
                </div>
                <div className="wireframes-desktop__block">
                    <h5 className="wireframes-desktop__block-title"> HOME </h5>

                    <Wireframe2 title={this.props.title}  className="wireframes-desktop__wireframe" />
                </div>
                <div className="wireframes-desktop__block">
                    <h5 className="wireframes-desktop__block-title"> SCHEDULE </h5>

                    <Wireframe3 title={this.props.title}  className="wireframes-desktop__wireframe"/>
                </div>
                <div className="wireframes-desktop__block">
                    <h5 className="wireframes-desktop__block-title"> REQUESTS </h5>

                    <Wireframe4 title={this.props.title}  className="wireframes-desktop__wireframe"/>
                </div>
            </div>

        </section>
    )
  }
}

export default WireframesDesktop;
