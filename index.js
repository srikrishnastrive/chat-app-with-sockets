const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use('/',express.static(__dirname + '/public'));
//attaching html file on / means root and mention the directory name

io.on('connection',(socket) => {
    console.log('a user connected',socket.id);

    //listening the event
    // socket.on('from_client',()=>{
    //     console.log('received a event from the client');
    //     socket.emit('from_server');
    // });

    socket.on('mssg_send',(data)=>{
        console.log(data);
        //we are not sending specific socket we are sending all the sockets all messages
        //io.emit('mssg_rcvd', data);
        //we are sending data to the specific socket
        socket.emit('mssg_rcvd', data);
        //we are sending data to all the sockets connected to the server expect the sending one.
        //socket.broadcast('mssg_rcvd',data);
    })

    // setInterval(()=> {
    //     socket.emit('from_server');
    // },2000);
    // setInterval(()=> {
    //     socket.emit('more_events');
    // },500);
});

server.listen(3000, () => {
    console.log('server started at 3000');
})