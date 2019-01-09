import React, { Component } from 'react';
import '../css/input.css';

class InputField extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            valid: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            value: e.currentTarget.value
        })
    }
    render(){
        return(
            <fieldset className="fieldset">
                <label className="label" htmlFor={this.props.name}>{this.props.label}:</label>
                <div className="input-wrapper">
                    <input className={this.props.className} 
                        id={this.props.id} 
                        type={this.props.type} 
                        name={this.props.name} 
                        placeholder={this.props.placeholder} 
                        onChange={this.handleChange} />
                </div>
            </fieldset>
        );
    }
}

export default InputField;