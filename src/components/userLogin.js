import React, { Component } from 'react';
import Cookies from 'js-cookie';

class UserLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
        this.logout = this.logout.bind(this);
    }

    componentDidMount(){
        const user = getUserName() || '';
    
        this.setState({
            username: user
        })
        
    }
    
    logout(e){
        e.preventDefault();

        fetch('api/logout', {
            method: 'POST', 
        })
        .then(console.log)
        .then(() => {
            this.setState({
                username: ''
            })
            Cookies.remove('user');
            window.location.href = '/';
        })
    }
    render(){
        const user = getUserName();
        if (user) {
            return (
                <div>
                    <span className="link nav-link sign-in">logged in: {user}</span>
                    <a className="link nav-link register" href="/logout" onClick = {this.logout}>logout</a>
                </div>
            )
        } else {
            return(
                <div>
                    <a className="link nav-link sign-in" href="/login">sign in</a>
                    <a className="link nav-link register" href="/register">register</a>
                </div>
            );
        }
    }
}

function getUserName(){
    return Cookies.get('user');
}

export default UserLogin;