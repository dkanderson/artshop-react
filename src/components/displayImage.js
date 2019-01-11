import React from 'react';

function DisplayImage(props){
    const image = `${process.env.PUBLIC_URL}/artwork/${props.url}`;
    return(
        <figure id="figure" className="figure uploaded-image">
            <img src={`${image}`} alt={props.title} />
        </figure>
    );
}

export default DisplayImage;