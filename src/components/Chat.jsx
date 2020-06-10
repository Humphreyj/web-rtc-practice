import React,{useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Input from './Input';
import InfoBar from './InfoBar';
import Messages from './Messages';

const ENDPOINT='https://chat-test-coach.herokuapp.com/';

let socket;
const Chat = ({location}) => {
   
    const [name,setName] =useState('')
    const [room,setRoom] =useState('')

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const {name, room} = queryString.parse(location.search)
        socket = io(ENDPOINT);
       
        setName(name)
        setRoom(room)
        console.log(name,room)
        console.log(socket)

        socket.emit('join', {name, room}, (error)=> {
            if(error) {console.log(error)}
        });
        // return () => {
        //     socket.emit('disconnect');
        //     socket.off();
        // }

    },[ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages,message])
        })
    }, [messages])

    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
        
    }

    console.log(message, messages)
    
    return (
        <div className='outer-container'>
            <div className='container'>
              
                <InfoBar room={room} />
                <Messages messages={messages} />
                <Input 
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
                />

            </div>
        </div>
    );
}

export default Chat;
