import React from 'react';
import ReactEmoji from 'react-emoji';
const Message = ({message, name}) => {
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if(message.user === trimmedName) {
        isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser ?  ( <div className="message">
        <h4 className='username'>Me</h4>
         <h4 className='message-text'> : {message.text}</h4>
    </div> ) : (
        <div className="message">
        <h4 className='username'>{message.user}</h4>
         <h4 className='message-text'> : {message.text}</h4>
    </div>
    )
    );
}


export default Message;
