var eventEmitter=require("./eventEmitters");

//subscribe to event exposed by event emitter
eventEmitter.on('ready',function() {
  console.log('event captured');
});