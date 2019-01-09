import React, { Component } from 'react';
import { ReactComponent as Logo } from '../logo.svg';
import '../css/header.css';

function ArtshopHeader(props){
    return(
        <header className="header">
            <div className="branding">
                <a className="branding" href="/">
                	<Logo />
            	</a>
                <div className="user-nav">
                    <div className="cart">
                        <a href="/cart" className="shopping-cart">
	            			<span href="cart" id="view-cart" className="cart-icon">
	            				<span id="cart-count" className="cart-count"></span>
	            				
	            			</span>
                        </a>
                    </div>
                    <div id="user-login" className="user-login">
                    </div>
                </div>
            </div>
        </header>
    );
    // TODO: add react icons 
}

export default ArtshopHeader;