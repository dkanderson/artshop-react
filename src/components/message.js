import React from 'react';

function Message(props) {
    return (
        <div id="message-wrapper">
            <div id="form-message" className={`message ${props.messageType}`}>{props.message}</div>
        </div>
    );
}

export default Message;


