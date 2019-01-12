import React from 'react';
import ArtshopHeader from './header.js';
import Navigation from './nav';
import Footer from './footer';
import Cookies from 'js-cookie';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cartCount: 0
        }
    }

    componentWillMount(){
        const cookie = Cookies.getJSON('cart');
        
        if ( cookie ) {
            this.setState({
                cartCount: cookie.length
            })
        }
    }

    updateCount = (count) => {
        this.setState({
            cartCount: count
        })
    }

    render(){
        return (
            <div>
                <ArtshopHeader count = {this.state.cartCount} />
                <Navigation updateCount = {this.updateCount} />
                <Footer />
            </div>
        );
    }
}

export default App;