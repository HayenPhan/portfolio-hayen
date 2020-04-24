import React from 'react';
import SvgButton from './../svg/Button';
import { HashLink as Link } from 'react-router-hash-link';

const Button = () => {
    return(
        <span>
            <SvgButton className="project__button">
            </SvgButton>
            <Link to="/plantacle/#plantacle1" className="project__button-text"> Read more! </Link>
        </span>

    )
};

export default Button;
