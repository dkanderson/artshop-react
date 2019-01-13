import React, { Component } from 'react';
import Inputfield from './inputField';
import Button from './button';

class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConf: '',
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
    validate(status, name){
        if (status === 'err') {
            this.setState({
                showMessage: showError(name)
            })
        } else if ( status === 'match') {
            this.setState({
                showMessage: ''
            })
        }

        if (status !== "pristine") {
            fetch(`api/users/${this.state[name]}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    exists: data._id ? true : false
                })
            })
            .catch(console.error)
        } 
    }

    handleClick(e){
        e.preventDefault();
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailCheck = this.state.email.match(regex);
        const data = preSubmitValidation(this.state);

        if(data && emailCheck){
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
                    { this.state.showMessage && <div id="error-msg-wrapper" className="error-msg">
                        <strong>Error: </strong><span id="error-msg">{this.state.showMessage.msg}</span>
                    </div> }
					<form className="form form-register" id="registration-form" action="">
                        <Inputfield 
                            className = {`input input-username`}
                            label = "username"
                            id = "username"
                            type = "text"
                            name = "username"
                            placeholder = "enter username"
                            handleInputChange = {this.handleChange}
                            isValid = {this.validate}
                            value = {this.state.username}
                            autoComplete = "username"
                            exists = {this.state.exists}
                        />
                        <Inputfield 
                            className = "input input-email"
                            label = "email"
                            id = "email"
                            type = "email"
                            name = "email"
                            placeholder = "enter email address"
                            handleInputChange = {this.handleChange}
                            isValid = {this.validate}
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
                            isValid = {this.validate}
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
                            isValid = {this.validate}
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

function showError(name){
    let error = {
        username: {
            hasError: true,
            msg: 'unique username is required'
        },
        email: {
            hasError: true,
            msg: 'valid email address is required'
        },
        password: {
            hasError: true,
            msg: 'password must be 8 characters or more'
        },
        passwordconf: {
            hasError: true,
            msg: 'passwords do not match'
        }
    };

    return error[name];
}

function preSubmitValidation(state) {
    let temp = Object.assign({}, state);
    delete temp.showMessage;
    delete temp.exists;

    for(let i in temp) {
        if ( !temp[i] ) {
            return undefined;
        } 
    }
    return temp;
}

export default RegisterForm;