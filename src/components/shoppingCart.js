import React, { Component } from 'react';
import Button from './button';
import formatCurrency from '../formatCurrency';
import Cookies from 'js-cookie';
import '../css/cart.css';

class ShoppingCart extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartCount: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e){
        const index = e.currentTarget.dataset.index;
        let cookie = Cookies.getJSON('cart');

        cookie.splice(index, index+1);
        Cookies.set('cart', cookie);
        this.setState({
            cartCount: cookie.length
        });
        this.props.updateCount(cookie.length);
        this.loadCartItems();

        
    }

    loadCartItems(){
        
        const cart = Cookies.getJSON('cart');
        if (cart) {
            return(
                cart.map((item, index) => {
                   return(
                        <tr key={index}>
                            <td className="td td-image"><div className="td-image-wrapper"><img src={`${process.env.PUBLIC_URL}/artwork/${item.url}`} alt={item.title} /></div></td>
                            <td className="td td-title">{item.title}</td>
                            <td className="td td-remove">
                            <Button onClick={this.handleClick} title="remove" className="button form-submit" index={index}/>
                            </td>
                            <td className="td td-price">{formatCurrency(item.price)}</td>
                        </tr>
                   );
                })
            )
        }

    }
    render(){
        const total = cartTotal(Cookies.getJSON('cart'));
        return(
            <div>
                <h2 className="heading heading_two shopping-cart-heading">Shopping Cart</h2>
                <div id="cart-wrapper" className="cart-wrapper">
                    <table id="cart-table" className="cart-table">
                    <tbody>
                        <tr className="cart-table-heading">
                            <th className="cart-table-heading-col">item</th>
                            <th className="cart-table-heading-col">description</th>
                            <th></th>
                            <th className="cart-table-heading-col">price</th>
                        </tr>
                        
                            {this.loadCartItems()}
                            <tr>
                                <td colSpan="2"></td>
                                <td>Total</td>
                                <td id="cart-total" className="td td-cart-total">{formatCurrency(total)}</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

function cartTotal( cartData ){ 

    const cartTotal = cartData.reduce((accumulator, currentValue) => {

        let x = (+currentValue.price);
        return accumulator + x;

    }, 0);

    return cartTotal
}

export default ShoppingCart;