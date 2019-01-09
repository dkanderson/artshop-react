import React from 'react';
import '../css/banner.css';

function Banner(props){
    return(
        <div className="banner">
            <h1 className="heading heading_one art-shop">{props.title}</h1>
        </div>
    );
}

export default Banner;