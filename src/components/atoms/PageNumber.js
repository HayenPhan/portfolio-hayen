import React from 'react';

const PageNumber = (props) => {
    return(
        <div className="pagenumber__wrapper">
            <p className="pagenumber"> { props.count } </p>
            <div className="pagenumber__circle--wrapper">
                <span className="pagenumber__circle"> </span>
            </div>
            <p className="pagenumber__text"> { props.title } </p>
        </div>
    )
};

export default PageNumber;
