const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;
const router = require('./router');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const {addUser, removeUser, getUser, getUsersInroom} = require('./users');

app.use(router);

io.on('connection',(socket)=> {
    console.log('a user has joined.')

    socket.on('join', ({name, room},callback) => {
        const {error, user} = addUser({id:socket.id, name, room});


        if(error) return callback(error);

        socket.emit('message', {user:'admin', text:`${user.name} welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message', {name: 'admin', text: `${user.name} has joined!`})

        socket.join(user.room);

        callback();
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)

        io.to(user.room).emit('message', {user: user.name, text: message});
        callback();
    })

    socket.on('disconnect',()=> {
        console.log('a user has left.')
    })
})



server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}, homie`);
})