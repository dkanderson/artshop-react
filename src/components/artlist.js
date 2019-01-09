import React, { Component } from 'react';
import Button from './button';
import '../css/global.css';

class Artlist extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        this.populate = this.populate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){
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
        const { title, price, url } = this.state.data[index];
        this.addToCart(title, price, url);
    }

    populate(artworks){
    
        return artworks.map((artwork, index) => {
            let url = require(`../artwork/${artwork.url}`);
            return (
            <div className="art-list-item" key={artwork._id}>
                <span className="artwork-title">{artwork.title}</span>
                <div className="artwork-wrapper"><img className="image image-artwork" src={url} alt={artwork.title} /></div>
                <span className="price">{formatCurrency(artwork.price)}</span>
                <Button title="add to cart" onClick={() => this.handleClick(index)} className="button button-cart add-cart" />
            </div>
            );
        })
    }

    addToCart(title, price, url){
        console.log(title, price, url);
    }

    render(){
        return (
            <div className="artlist-wrapper">
				<div className="art-list">
					
					{this.state.data.length ? this.populate(this.state.data) : null}	
					
				</div>
			</div>
        );
    }

}

function formatCurrency(number) {
    let value = undefined;

    if (typeof number === 'string') {

        value = number.replace(/,/g, '');

    } else {

        value = number.toString(10).replace(/,/g, '');
    }

    // based on jQuery format currency plugin logic
    var result = '';
    var valueArray = value.split('');
    var resultArray = [];
    var counter = 0;
    var temp = '';
    for (let i = valueArray.length - 1; i >= 0; i--) {
        temp += valueArray[i];
        counter += 1;
        if (counter === 3) {
            resultArray.push(temp);
            counter = 0;
            temp = '';
        }
    }

    if (counter > 0) {
        resultArray.push(temp);
    }

    for (let i = resultArray.length - 1; i >= 0; i--) {
        var resTemp = resultArray[i].split('');
        for (let j = resTemp.length - 1; j >= 0; j--) {
            result += resTemp[j];
        }
        if (i > 0) {
            result += ',';
        }
    }


    return `$${result}.00`;
}

export default Artlist;