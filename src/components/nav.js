import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Banner from './banner';
import Artlist from './artlist';
import AddNew from './add';
import '../css/nav.css';
import EditArtwork from './edit';
import NoMatch from './noMatch';
import ShoppingCart from './shoppingCart';
import LoginForm from './login';
import RegisterForm from './register';

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
                    <Switch>
                        <Route exact path="/" component = {() => <Artlist mode = "add to cart" updateCount = {props.updateCount} />} />
                        <Route exact path="/about" render = {() => <h1>about</h1>} />
                        <Route exact path="/store" render = {() => <Artlist mode = "add to cart" updateCount = {props.updateCount} />} />
                        <Route exact path="/contact" render = {() => <h1>contact</h1>} />
                        <Route exact path="/add" component = {AddNew} />
                        <Route exact path="/edit" render = {() => <EditArtwork />} />
                        <Route exact path="/delete" render = {() => <Artlist mode = "delete" />} />
                        <Route path="/cart" render = {() => <ShoppingCart updateCount = {props.updateCount} />} />
                        <Route exact path="/login" render = {() => <LoginForm />} />
                        <Route exact path="/register" render = {() => <RegisterForm />} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </div>
        </Router>
        
    );
}

export default Navigation;