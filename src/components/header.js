import React from 'react';
import { ReactComponent as Logo } from '../logo.svg';
import '../css/header.css';
import UserLogin from './userLogin';
import CartLink from './cartLink';

function ArtshopHeader(props){
    return(
        <header className="header">
            <div className="branding">
                <a className="branding" href="/">
                    <Logo />
                </a>
                <div className="user-nav">
                    <div className="cart">
                        <CartLink count = {props.count}/>
                    </div>
                    <div id="user-login" className="user-login">
                        <UserLogin />
                    </div>
                </div>
            </div>
        </header>
    );
    // TODO: add react icons 
}

export default ArtshopHeader;