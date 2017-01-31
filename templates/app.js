const fs = require('fs');
const http = require('http');

var server = http.createServer((req, res) => {
  fs.readFile('./index.html', (err, data) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(data, 'utf-8');
  });
}).listen(3000, '127.0.0.1');

var io = require('socket.io').listen(server);

var count = 0;
io.sockets.on('connection', function (socket) {
  count++;
  console.log('ususario conectado. '+count + ' usuarios conectados.');

  socket.emit('users', {number: count});
  socket.broadcast.emit('users', {number: count});

  socket.on('disconnect', function () {
    count--;
    console.log('ususario desconectado. '+count + ' usuarios conectados.');
    socket.broadcast.emit('users', {number: count});
  })
})
