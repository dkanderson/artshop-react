import React, { Component } from 'react';
import '../css/input.css';

class InputField extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this)
    }
    
    handleChange(e){
        this.props.handleInputChange(e.target.value, e.target.name);
    }
    validate(){
        this.props.isValid(this.props.value ? true : false);
    }
    render(){
        return(
            <fieldset className="fieldset">
                {this.props.label && <label className="label" htmlFor={this.props.name}>{this.props.label}:</label>}
                <div className="input-wrapper">
                    <input className={this.props.className} 
                        id={this.props.id} 
                        type={this.props.type} 
                        name={this.props.name} 
                        placeholder={this.props.placeholder} 
                        onChange={this.handleChange}
                        onBlur = {this.validate}
                        value = {this.props.value}
                        />
                </div>
            </fieldset>
        );
    }
}

export default InputField;