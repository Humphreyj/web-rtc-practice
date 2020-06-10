import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';


const Messages = ({messages}) => {
    return (
       <ScrollToBottom>
           {messages.map(message => {
               return (
                <div className="message">
                <h4>{message.user}</h4>
                 <h4>{message.text}</h4>
            </div>
               )
               
           })}
       </ScrollToBottom>
    );
}

export default Messages;
