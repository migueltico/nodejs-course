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

  console.log('new user');

  socket.on('message', (data) => {
    socket.broadcast.emit('send message', data);
  });
});
