const events = require('events');
const net = require('net');

// channel creation
var channel = new events.EventEmitter();
channel.clients       = {};
channel.subscriptions = {};

channel.on('join', function (id, client) {
  channel.clients[id] = client;
  channel.subscriptions[id] = function (senderId, message) {
    if (id !== senderId) {
      this.clients[id].write(message);
    }
  };
  this.on('broadcast', this.subscriptions[id]);
});

// server creation
var server = net.createServer(function(client) {
  var id = client.remoteAddress + ':' + client.remotePort;

  client.on('connect', function(){
    channel.emit('join', id, client);
  });

  client.on('data', function(data){
    data = data.toString();
    channel.emit('broadcast', id, data);
  });
});

// init server
server.listen(3000);
