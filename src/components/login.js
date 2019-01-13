import React, { Component } from 'react';
import Inputfield from './inputField';
import Button from './button';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            valid: false
        }
    }
    render(){
        return(
            <div className="position-form">
				<div className="form-wrapper form-wrapper-login-form">
					<div id="error-msg-wrapper" className="error-msg"><strong>Error: </strong><span id="error-msg"></span></div>
					<form className="form form-login" id="login-form" action="">
                        <Inputfield 
                            className = "input input-username"
                            label = "username"
                            id = "username"
                            type = "text"
                            name = "username"
                            placeholder = "enter username"
                            handleInputChange = {this.handleChange}
                            isValid = {this.validate}
                            value = {this.state.username}
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
                        />
                        <Button 
                            className = "button button-register"
                            title = "login"
                            onClick = {this.handleClick}
                        />
					</form>
				</div>
			</div>
        );
    }
}

export default LoginForm;