const events = require('events');
const EventEmitter = events.EventEmitter;

var ee = new EventEmitter();

ee.on('someEvent', function () {
  console.log('event has ocurred.');
});

ee.emit('someEvent');
