const events = require('events');
const EventEmitter = events.EventEmitter;

var ee = new EventEmitter();

ee.on("newListener", function (evtName, fn) {
    console.log("New Listener: " + evtName);
});

ee.on("removeListener", function (evtName) {
    console.log("Removed Listener: " + evtName);
});

function foo () {}
 
ee.on("save-user", foo);
ee.removeListener("save-user", foo);
