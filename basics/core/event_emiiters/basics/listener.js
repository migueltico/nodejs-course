// listener. This method takes an event name as a parameter and
// returns an array of all the functions that are listening for that event.

const events = require('events');
const EventEmitter = events.EventEmitter;

var ee = new EventEmitter();

function onlyOnce () {
  console.log(ee.listeners("firstConnection"));
  ee.removeListener("firstConnection", onlyOnce);
  console.log(ee.listeners("firstConnection"));
}

ee.on("firstConnection", onlyOnce)
ee.emit("firstConnection");
ee.emit("firstConnection");
