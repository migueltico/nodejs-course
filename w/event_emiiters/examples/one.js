const events = require('events');
var eventEmitter = new events.EventEmitter();

var ringBell = function ringBell() {
  console.log('ring ring ring');
};

eventEmitter.on('doorOpen', ringBell);

// se puede registrar las funciones que se quieran
// eventEmitter.on('doorOpen', ringBell);
// eventEmitter.on(‘doorOpen’, doSomething);
// eventEmitter.on(‘doorOpen’, doSomethingElse);


eventEmitter.emit('doorOpen');
