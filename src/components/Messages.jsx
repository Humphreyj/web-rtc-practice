import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';
import ReactEmoji from 'react-emoji'
import '../styles/chat/messages.scss';



const Messages = ({messages}) => {
    return (
       <ScrollToBottom className='messages'>
           {messages.map(message => {
               return (
                <div className="message">
                <h4 className='username'>{message.user}</h4>
                 <h4 className='message-text'> : {ReactEmoji.emojify(message.text)}</h4>
            </div>
            // <Message 
            // message={message.text}
            // name={message.user}/>
               )
               
           })}
       </ScrollToBottom>
    );
}

export default Messages;
