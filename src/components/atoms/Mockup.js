import React from 'react';
import styled from 'styled-components';
import imgPlantacle from '../../images/iphone_mockup.png';
import imgBanzai from '../../images/macbook_mockup.png';
import imgILE from '../../images/macbook_mockup--ILE.png';

const MockupImage = styled.div`
    background-image: url(${props => props.title === 'Plantacle' ? imgPlantacle : props.title === 'Banzai' ? imgBanzai : props.title === 'I.L.E' ? imgILE : null });
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
        background-size: ${(props) => props.title === 'Plantacle' ? props.widthPlantacle : props.widthBanzai} ${(props) => props.title === 'Plantacle' ? props.heightPlantacle : props.heightBanzai};
        width: ${(props) => props.title === 'Plantacle' ? props.widthPlantacle : props.widthBanzai};
        height: ${(props) => props.title === 'Plantacle' ? props.heightPlantacle : props.heightBanzai};
    }
`;

const Mockup = (props) => {
    return(
        <div className="mockup-wrapper">
            <MockupImage title={props.title} widthPlantacle={props.widthPlantacle} widthBanzai={props.widthBanzai} heightPlantacle={props.heightPlantacle} heightBanzai={props.heightBanzai}>
            </MockupImage>
        </div>
    )
};

export default Mockup;
