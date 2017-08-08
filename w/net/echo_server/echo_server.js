const net = require('net');

// telnet 127.0.0.1 3000
// if you use windows, you have to intall telnet

const server = net.createServer(function (socket) {
  console.log('new telnet user connected');
  // socket.on('data', function (data) {
  //   console.log(data);
  //   socket.write(data);
  // });
  socket.once('data', function (data) {
    console.log('data');
    socket.write(data);
  });
}).listen(3000);
