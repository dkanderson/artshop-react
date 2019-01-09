import React from 'react';
import '../css/forms.css';

function Message(props) {
    const message = props.message;
    if(message){
    return (
       
        <div id="message-wrapper">
            <div id="form-message" className={`message ${props.messageType}`}><strong>{props.messageType}: </strong>{props.message}</div>
        </div>
        
    );
    } else {
        return null;
    }
}

export default Message;


