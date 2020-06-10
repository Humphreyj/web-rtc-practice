import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/join/join.scss';

const Join = () => {

    const [data, setData] =useState({
        name: '',
        room: ''
    })
    const [name, setName]=useState('');
    const [room, setRoom] =useState('');


    
    return (
        <div className='join-outer-container'>
            <div className="join-inner-container">
                <h1 className="heading">Welcome for chat. Enter your name and desired room.</h1>
                
                <div className='join-inputs'>
                    <input placeholder='Name' name='name' type="text" className="join-input" onChange={e =>setName(e.target.value)}/>
                
                    <input placeholder='Room' name='room' type="text" className="join-input" onChange={e =>setRoom(e.target.value)}/>

                    <Link onClick={e => (!name || !room) ? e.preventDefault :  null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button" type='submit'>Sign in</button>
                    </Link>
                </div>
                
            </div>   
        </div>
    );
}

export default Join;
