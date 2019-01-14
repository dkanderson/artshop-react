import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import Banner from './banner';
import Artlist from './artlist';
import AddNew from './add';
import '../css/nav.css';
import EditArtwork from './edit';
import NoMatch from './noMatch';
import ShoppingCart from './shoppingCart';
import LoginForm from './login';
import RegisterForm from './register';
import Cookies from 'js-cookie';

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
                        <Route exact path="/add" render = {() => <PrivateRoute component = {AddNew} />} />
                        <Route exact path="/edit" render = {() => <PrivateRoute component = {EditArtwork} />} />
                        <Route exact path="/delete" render = {() => <PrivateRoute component = {Artlist} />} />
                        <Route path="/cart" render = {() => <ShoppingCart updateCount = {props.updateCount} />} />
                        <Route exact path="/login" component = {LoginForm} />
                        <Route exact path="/register" render = {() => <RegisterForm />} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
    
}

function PrivateRoute({ component: Component, ...rest }) {
    let auth = false || Cookies.get('user');
    
    fetch('api/authenticate')
        .then(res => {
            if (res.status === 200 ) {
                auth = true;
            } else {
               auth = false;
               Cookies.remove('user');
            }
        });
    
    return (
      <Route
        {...rest}
        render={props =>
          auth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
  

export default Navigation;