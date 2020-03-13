const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
  })
  ws.send('ho!')
})




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