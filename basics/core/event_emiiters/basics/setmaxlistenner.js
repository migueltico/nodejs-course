// By default, Node allows up to ten listeners on one event at once;
// if more are created, node will issue a warning.
 // However, we can change this amount by using setMaxListeners

 const events = require('events');
 const EventEmitter = events.EventEmitter;

 var ee = new EventEmitter();

 // To set the maximum number of viewers
 ee.setMaxListeners(20);

 // all functions will be called when the event is fired.
 ee.on('someEvent', function(){ console.log('event1'); });
 ee.on('someEvent', function(){ console.log('event2'); });
 ee.on('someEvent', function(){ console.log('event3'); });
 ee.on('someEvent', function(){ console.log('event4'); });
 ee.on('someEvent', function(){ console.log('event5'); });
 ee.on('someEvent', function(){ console.log('event6'); });
 ee.on('someEvent', function(){ console.log('event7'); });
 ee.on('someEvent', function(){ console.log('event8'); });
 ee.on('someEvent', function(){ console.log('event9'); });
 ee.on('someEvent', function(){ console.log('event10'); });
 ee.on('someEvent', function(){ console.log('event11'); });

ee.emit('someEvent');
