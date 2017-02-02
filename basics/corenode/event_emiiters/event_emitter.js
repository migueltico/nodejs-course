var EventEmitter = require('events').EventEmitter;
var channel      =  new EventEmitter();

channel.on('join', function () {
  console.log('welcome!');
});

channel.on('data', function (data) {
  console.log(data);
});

channel.on('error', function (error) {
  console.log(error);
});

// emit event to test it
channel.emit('join');
channel.emit('data', 'que tal!');
channel.emit('error', new Error('My error'));
