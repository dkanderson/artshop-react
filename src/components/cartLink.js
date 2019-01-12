import React from 'react';
import { ReactComponent as CartSvg } from '../cart.svg';

function CartLink(props) {

    return(
        <a href="/cart" className="shopping-cart">
            <span id="view-cart" className="cart-icon"> 
                { props.count > 0 && 
                    <span id="cart-count" className="cart-count">{props.count}</span> }
                <CartSvg />
            </span>
        </a>
    );

}

export default CartLink;