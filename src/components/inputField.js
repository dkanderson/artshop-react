import React, { Component } from 'react';
import '../css/input.css';

class InputField extends Component{

    constructor(props){
        super(props);
        this.state = {
            status: 'pristine',
            valid: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this)
    }
    
    handleChange(e){
        this.props.handleInputChange(e.target.value, e.target.name);
    }
    validate(e){
        let status = '';
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const value = this.props.value;
        const type = this.props.type;

        if ( value ) {
            if( type === 'email') {
                value.match(regex) ? status = 'match' : status = 'err';
            } else {
                status = 'match';
            }
        } else {
            status = 'err';
        }

        this.props.isValid(status, e.target.name);

        this.setState({
            status
        })
    }

    render(){
        return(
            <fieldset className="fieldset">
                { this.props.label && 
                    <label className="label" htmlFor={this.props.name}>{this.props.label}:</label> }
                    { this.props.exists && 
                        <span id="exists" className="exists">Username exists</span> }
                <div className="input-wrapper">
                    <input className={`${this.props.className} ${this.props.exists ? 'err' : this.state.status}`} 
                        id={this.props.id} 
                        type={this.props.type} 
                        name={this.props.name} 
                        placeholder={this.props.placeholder} 
                        onChange={this.handleChange}
                        onBlur = {this.validate}
                        value = {this.props.value}
                        autoComplete = {this.props.autoComplete}
                        />
                </div>
            </fieldset>
        );
    }
}

export default InputField;