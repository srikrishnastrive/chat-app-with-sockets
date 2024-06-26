var socket = io();

// let btn = document.getElementById('btn');
// btn.onclick = function exec(){
//     console.log('sending a connect from client');
//     socket.emit('from_client');
// }

// socket.on('from_server',()=>{
//     console.log('Collected a new event from server')
//     const div = document.createElement('div');
//     div.innerText = "New event from server";
//     document.body.appendChild(div);
// })

let btn = document.getElementById('btn');
let inputMsg = document.getElementById('newmsg');
let msgList = document.getElementById("msglist");

btn.onclick = function exec(){
    socket.emit('mssg_send',{
        msg:inputMsg.value
    });
}

socket.on('mssg_rcvd', (data) => {
    let limsg = document.createElement('li');
    limsg.innerText = data.msg;
    msgList.appendChild(limsg);
})