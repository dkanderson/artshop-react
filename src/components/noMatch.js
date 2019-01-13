import React from 'react';
import '../css/404.css';

function NoMatch({ location }){
    return(
        <div className="error-page">
            <h1 class="error h1">Made a wrong turn somewhere</h1>
            <h2><span className="loc">{`${location.pathname}`}</span> only exists in your dreams</h2>
        </div>
    )
}

export default NoMatch;