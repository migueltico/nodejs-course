const net = require('net');

const HOST = '127.0.0.1';
const PORT = 6969;


net.createServer(function (socket) {
  console.log('connectded', socket.remoteAddress, ':', socket.remotePort);
  socket.on('data', function (data) {
    console.log('data: '+ socket.remoteAddress+': '+data);
    // Write the data back to the socket, the client will receive it as data from the server
    socket.write('You said "' + data + '"');
  });

  socket.on('close', function(data) {
    console.log('CLOSED: ' + socket.remoteAddress +' '+ socket.remotePort);
  });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);
