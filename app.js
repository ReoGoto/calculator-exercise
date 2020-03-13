
// var WebSocketServer = require('ws').Server
//     , http = require('http')
//     , express = require('express')
//     , app = express();
 
// app.use(express.static(__dirname + '/'));
// var server = http.createServer(app);
// var wss = new WebSocketServer({server:server});
 
// var connections = [];
 
// wss.on('connection', function (ws) {
    
//     connections.push(ws);

//     ws.on('close', function () {
//         connections = connections.filter(function (conn, i) {
//             return (conn === ws) ? false : true;
//         });
//     });

//     ws.on('message', function (message) {
//         console.log('message:', message);
//         broadcast(JSON.stringify(message));
//     });
// });
 
// function broadcast(message) {
//     connections.forEach(function (con, i) {
//         con.send(message);
//     });
// };
 
// server.listen(8335);





// const ws = new require('ws');
// const wss = new ws.Server({noServer: true});

// const clients = new Set();

// http.createServer((req, res) => {
//   // here we only handle websocket connections
//   // in real project we'd have some other code here to handle non-websocket requests
//   wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
// });

// function onSocketConnect(ws) {
//   clients.add(ws);

//   ws.on('message', function(message) {
//     message = message.slice(0, 50); // max message length will be 50

//     for(let client of clients) {
//       client.send(message);
//     }
//   });

//   ws.on('close', function() {
//     clients.delete(ws);
//   });
// }


'use strict';

const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on('connection', (wss) => {
  console.log('Client connected');
  //ws.on('close', () => console.log('Client disconnected'));
});

var connections = [];
 
wss.on('connection', function (ws) {
    
    connections.push(ws);

    ws.on('close', function () {
        connections = connections.filter(function (conn, i) {
            return (conn === ws) ? false : true;
        });
    });

    ws.on('message', function (message) {
        console.log('message:', message);
        broadcast(JSON.stringify(message));
    });
});
 
function broadcast(message) {
    connections.forEach(function (con, i) {
        con.send(message);
    });
};




// setInterval(() => {
//   wss.clients.forEach((client) => {
//     client.send(new Date().toTimeString());
//   });
// }, 1000);
