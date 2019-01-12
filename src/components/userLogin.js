import React from 'react';

function UserLogin(props){
    if (props.loggedin) {
        return (
            <div>
                <span className="link nav-link sign-in">logged in: {props.username}</span>
                <a className="link nav-link register" href="/logout" onClick = {props.logout}>logout</a>
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

export default UserLogin;