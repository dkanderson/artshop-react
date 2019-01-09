import React, { Component } from 'react';
import ArtshopHeader from './header.js';
import Navigation from './nav';
import Footer from './footer';

function App(props){
    return (
        <div>
            <ArtshopHeader />
            <Navigation />
            <Footer />
        </div>
    );
}

export default App;