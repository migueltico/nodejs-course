// If you want to remove all the listeners bound to a given event,
// you can use removeAllListeners; just pass it the name of the event:

const events = require('events');
const EventEmitter = events.EventEmitter;

var ee = new EventEmitter();

function onlyOnce () {
    console.log("You'll never see this again");
    ee.removeAllListeners("firstConnection");
}

ee.on("firstConnection", onlyOnce)

ee.emit('firstConnection');
