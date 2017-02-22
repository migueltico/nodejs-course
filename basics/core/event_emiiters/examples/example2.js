const EventEmitter = require('events').EventEmitter;
const channel = new EventEmitter();
// event can be 'join', 'data', 'error' or 'some crazy long name'
channel.on('join', ()=> {
  console.log('welcome');
});

setTimeout(function(){
  channel.emit('join');
}, 5000);
