const EventEmitter = require('events').EventEmitter;
const net    = require('net');

var channel = new EventEmitter();
channel.clients = {};
channel.subscriptions = {};

// join and broadcast are arbitrary names

channel.on('join', function(id, client) {
  var welcome = "Welcome!\n"+ 'Guests online: ' + this.listeners('broadcast').length;
  client.write(welcome + "\n");
  this.clients[id] = client;
  this.subscriptions[id] = function (senderId, message) {
    if (id != senderId) {
      this.clients[id].write(message);
    }
  }
  this.on('broadcast',this.subscriptions[id]);
});
channel.on('leave', function (id) {
  channel.removeListener('broadcast', this.subscriptions[id]);
  channel.emit('broadcast', id, id + 'has left the chat.');
});
// to remove all listeners
channel.on('shutdown', function () {
  channel.emit('broadcast', '',"chat has shut down.\n");
  channel.removeAllListeners('broadcast');
});
const server = net.createServer(function (client) {
  var id = client.remoteAddress + ':' + client.remotePort;
  // client.on('connect', function () {
  // });
  channel.emit('join', id, client);
  client.on('data', function (data) {
    data = data.toString();
    if (data === 'shutdown\r\n') {
      channel.emit('shutdown');
    }
    channel.emit('broadcast', id, data);
  });

  client.on('close', function () {
    channel.emit('leave', id);
  });

});

server.listen(3000);
