const fs    = require('fs');
const http  = require('http');

var server = http.createServer((req, res) => {
  fs.readFile('./index.html', (err, data) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(data, 'utf-8');
  });
}).listen(3000, '127.0.0.1');

var io = require('socket.io').listen(server);

io.sockets.on('connection', (socket) => {

  socket.on('ping', (data) => {
    console.log('reciviendo Ping. enviando Pong');
    socket.emit('pong', {text: 'Pong'});
  });
  socket.on('pong', (data) => {
    console.log('Pong Recivido');
  });

  setInterval(function () {
    socket.emit('ping',{text: 'ping'} );
  }, 1000);
});
