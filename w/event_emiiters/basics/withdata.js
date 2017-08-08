 // include data when firing events
const events = require('events');
const EventEmitter = events.EventEmitter;

var ee = new EventEmitter();

ee.on('myDataTransfer', function (data) {
  console.log('data received: ', data);
});

ee.emit('myDataTransfer', {
  firstName: 'Fabian',
  secondName: 'Jesus'
});
