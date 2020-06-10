import React, {useState} from 'react';
import {Link} from 'react-router-dom';

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
                <h1 className="heading"></h1>
                <div>
                    <input placeholder='Name' name='name' type="text" className="joinInput" onChange={e =>setName(e.target.value)}/>
                </div>
                <div>
                    <input placeholder='Room' name='room' type="text" className="joinInput" onChange={e =>setRoom(e.target.value)}/>
                </div>
                <Link onClick={e => (!name || !room) ? e.preventDefault :  null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button" type='submit'>Sign in</button>
                </Link>
            </div>   
        </div>
    );
}

export default Join;
