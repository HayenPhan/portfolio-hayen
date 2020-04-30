import React from 'react';
import SvgButton from './../svg/Button';
import { HashLink as Link } from 'react-router-hash-link';

const Button = (props) => {
    return(
        <span>
            <SvgButton className="project__button">
            </SvgButton>
            <Link to={props.buttonLink} className="project__button-text"> Read more! </Link>
        </span>
    )
};

export default Button;
