import React from 'react';
import styled from 'styled-components';
import imgPlantacle from '../../images/iphone_mockup.png';

const MockupImage = styled.div`
    background-image: url(${props => props.title === 'Plantacle' ? imgPlantacle : '40px'});
    background-size: 278px 287px;
    background-repeat: no-repeat;
    width: 100%;
    height: 287px;
    margin: 0 auto;

    @media (min-width: 500px) {
        background-size: 400px 389px;
        width: 400px;
        height: 389px;
    }

    @media (min-width: 768px) {
        background-size: 498px 487px;
        width: 498px;
        height: 487px;
    }

    @media (min-width: 1024px) {
        background-size: 498px 487px;
        width: 498px;
        height: 487px;

        // Center
        position: absolute;
        top: 50%;
        left: 62%;
        transform: translate(-50%, -50%);
    }

    @media (min-width: 1200px) {
        background-size: 608px 597px;
        width: 608px;
        height: 597px;
    }
`;

const Mockup = (props) => {
    return(
        <div className="mockup-wrapper">
            <MockupImage title={props.title}>
            </MockupImage>
        </div>
    )
};

export default Mockup;
