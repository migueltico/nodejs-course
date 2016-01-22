var eventEmitter=require('events').EventEmitter;

eventEmitter=new eventEmitter();

emitEvent();
function emitEvent () {
  setTimeout(function() {
    eventEmitter.emit('ready');
    emitEvent();
  },3000);
}

module.exports=eventEmitter;