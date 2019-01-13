import React, { Component } from 'react';
import Inputfield from './inputField';
import Button from './button';
import validator from '../validator';

class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConf: '',
            validation: {
                username: {
                    status: 'pristine',
                    valid: false,
                    exists: false 
                },
                email: {
                    status: 'pristine',
                    valid: false
                },
                password: {
                    status: 'pristine',
                    valid: false
                },
                passwordConf: {
                    status: 'pristine',
                    valid: false
                }
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(value, name){
        this.setState({
            [name]: value
        })
        
    }
    validate(e){
        const vData = validator(this.state);
        this.setState({
            validation: vData,
            message: vData[e.target.name].msg
        });
    }

    handleClick(e){
        e.preventDefault();

        const isValid = preSubmitValidation(this.state.validation);
        let data = Object.assign({}, this.state);
        delete data.validation;

        if(isValid){
            fetch('api/users', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(console.log)
        }
    }

    render(){
        return(
            <div className="position-form">
				<div className="form-wrapper form-wrapper-register-form">
                    <form className="form form-register" id="registration-form" action="">
                    { this.state.message && <div id="error-msg-wrapper" className="error-msg">
                            <strong>Error: </strong><span id="error-msg">{this.state.message}</span>
                        </div> }
                        <Inputfield 
                            className = {`input input-username`}
                            label = "username"
                            id = "username"
                            type = "text"
                            name = "username"
                            placeholder = "enter username"
                            handleInputChange = {this.handleChange}
                            validate = {this.validate}
                            isValid = {this.state.validation.username.valid}
                            status = {this.state.validation.username.status}
                            value = {this.state.username}
                            autoComplete = "username"
                            exists = {this.state.validation.username.exists}
                        />
                        <Inputfield 
                            className = "input input-email"
                            label = "email"
                            id = "email"
                            type = "email"
                            name = "email"
                            placeholder = "enter email address"
                            handleInputChange = {this.handleChange}
                            validate = {this.validate}
                            isValid = {this.state.validation.email.valid}
                            status = {this.state.validation.email.status}
                            value = {this.state.email}
                            autoComplete = "email address"
                        />
                        <Inputfield 
                            className = "input input-password"
                            label = "password"
                            id = "password"
                            type = "password"
                            name = "password"
                            handleInputChange = {this.handleChange}
                            validate = {this.validate}
                            isValid = {this.state.validation.password.valid}
                            status = {this.state.validation.password.status}
                            value = {this.state.password}
                            autoComplete = "new-password"
                        />
                        <Inputfield 
                            className = "input input-password"
                            label = "Confirm password"
                            id = "password-confirm"
                            type = "password"
                            name = "passwordConf"
                            handleInputChange = {this.handleChange}
                            validate = {this.validate}
                            isValid = {this.state.validation.passwordConf.valid}
                            status = {this.state.validation.passwordConf.status}
                            value = {this.state.passwordConf}
                            autoComplete = "new-password"
                        />
                        <Button 
                            className = "button button-register"
                            title = "register"
                            onClick = {this.handleClick}
                        />
					</form>
				</div>
			</div>
        );
    }
}

function preSubmitValidation(valid) {

    for(let i in valid) {
        if ( !valid[i].valid ) {
            return false;
        } 
    }
    return true;
}

export default RegisterForm;