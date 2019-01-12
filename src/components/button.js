import React, { Component } from 'react';
import '../css/forms.css';

class Button extends Component{
    constructor(props){
        super(props);

        this.state = {
            disabled: false,
            loading: false
        }
    }
    render(){
        return(
            <button onClick={this.props.onClick} className={this.props.className} data-index={this.props.index} >
            { this.props.icon && 
                <i className={this.props.iconClass}>{this.props.icon}</i> }
            {this.props.title}</button>
        );
    }
}

export default Button;