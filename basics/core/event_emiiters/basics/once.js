const events = require('events');
const EventEmitter = events.EventEmitter;

var ee = new EventEmitter();

ee.once("firstConnection", function () { console.log("You'll never see this again"); });
ee.emit("firstConnection");
ee.emit("firstConnection");
