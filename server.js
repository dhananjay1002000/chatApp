const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');

const io = new Server(server , {
    cors:{
        origin:"*"
    }
})

io.on('connection' , (socket)=>{
    console.log('A user connected');
    socket.on('disconnect' , ()=>{
        console.log("A user disconnect!");
    })
    socket.on('chat message' , (msg)=>{
     console.log(msg);
     socket.broadcast.emit('chat message' , msg);
    })

})

server.listen(3500 , ()=>{
    console.log("Listening on $PORT 3500.....")
})