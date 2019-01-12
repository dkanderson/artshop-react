import React, { Component } from 'react';
import Button from './button';
import '../css/global.css';
import formatCurrency from '../formatCurrency';
import Cookies from 'js-cookie';

class Artlist extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            deleted: false
        }
        this.populate = this.populate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.deleteArtwork = this.deleteArtwork.bind(this);
        this.getArtwork = this.getArtwork.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentWillMount(){
        this.getArtwork();
    }

    getArtwork(){
        fetch('/api/artwork')
            .then(response => response.json())
            .then((response) => {
                this.setState({
                data: response
            })})
            .catch ((error) => {
                console.error(error);
            })
    }

    handleClick(index){
        const { title, price, url} = this.state.data[index];

        if (this.props.mode === "add to cart"){
            this.addToCart(title, price, url);
        } else if ( this.props.mode === "edit") {
            this.editArtwork( title );
        } else if ( this.props.mode === "delete") {
            this.deleteArtwork( title );
        }
        
    }

    populate(artworks){
    
        return artworks.map((artwork, index) => {
            let url = `${process.env.PUBLIC_URL}/artwork/${artwork.url}`;
            return (
            <div className="art-list-item" key={artwork._id}>
                <span className="artwork-title">{artwork.title}</span>
                <div className="artwork-wrapper"><img className="image image-artwork" src={url} alt={artwork.title} /></div>
                <span className="price">{formatCurrency(artwork.price)}</span>
                <Button title={this.props.mode} onClick={() => this.handleClick(index)} className="button button-cart add-cart" />
            </div>
            );
        })
    }

    addToCart(title, price, url){
        let cartCookie = Cookies.getJSON('cart');

        if(cartCookie){
            cartCookie.push({title, price, url});
            Cookies.set('cart', cartCookie);
            this.props.updateCount(cartCookie.length);
        } else {
            Cookies.set('cart', [{ title, price, url }]);
            this.props.updateCount(cartCookie.length);
        }

        
    }

    editArtwork(title){
        this.props.triggerEdit(title);
    }

    deleteArtwork(title){
        fetch(`api/artwork/${title}`, {
            method: 'DELETE',
        })
        .then( response => {
            if ( response.status === 2000 ) {
                this.getArtwork();
            } 
        })
        .catch ( error => {
            console.error(error);  
        });
    }

    render(){
        return (
            <div className="artlist-wrapper">
				<div className="art-list">
					
					{this.state.data.length ? this.populate(this.state.data) : <div>Loading...</div>}	
					
				</div>
			</div>
        );
    }

}

export default Artlist;