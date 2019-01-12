import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Banner from './banner';
import Artlist from './artlist';
import AddNew from './add';
import '../css/nav.css';
import EditArtwork from './edit';

function Navigation(props){
    return (
        <Router>
            <div>
                <nav id="main-nav" className="main-nav">
                    <Link className="link nav-link" to="/">home</Link>
                    <Link className="link nav-link" to="/about">about</Link>
                    <Link className="link nav-link" to="/store">store</Link>
                    <Link className="link nav-link" to="/contact">contact</Link>
                    <Link className="link nav-link" to="/add">add</Link>
                    <Link className="link nav-link" to="/edit">edit</Link>
                    <Link className="link nav-link" to="/delete">delete</Link>
                </nav>

                <div id="app" className="app-container">
                    <Banner title="Artshop" />
                    <Route exact path="/" component = {() => <Artlist mode = "add to cart" updateCount = {(count) => props.updateCount(count)} />} />
                    <Route exact path="/about" render = {() => <h1>about</h1>} />
                    <Route exact path="/store" render = {() => <Artlist mode = "add to cart" updateCount = {(count) => props.updateCount(count)} />} />
                    <Route exact path="/contact" render = {() => <h1>contact</h1>} />
                    <Route exact path="/add" component = {AddNew} />
                    <Route exact path="/edit" render = {() => <EditArtwork />} />
                    <Route exact path="/delete" render = {() => <Artlist mode = "delete" />} />
                </div>
            </div>
        </Router>
        
    );
}

export default Navigation;