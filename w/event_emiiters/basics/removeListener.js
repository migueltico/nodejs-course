 // we can remove a single listener with the removeListener method.
// It takes two parameters: the event name and the listener function.
// So far, we've been using anonymous functions as our listeners.
// If we want to be able to remove a listener later,
// it will need to be a function with a name we can reference. We can use this removeListener method to duplicate the effects of the once method:
const events = require('events');
const EventEmitter = events.EventEmitter;

var ee = new EventEmitter();

function onlyOnce() {
  console.log("You'll never see this again.");
  ee.removeListener('firstConnection', onlyOnce);
}

ee.on('firstConnection', onlyOnce);
ee.emit('firstConnection');
ee.emit('firstConnection');
