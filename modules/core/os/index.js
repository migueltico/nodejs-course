var os = require('os');

console.log('Operative System: ' +  os.platform());
console.log('OS version: ', os.release()),
console.log('Total Memory: ', os.totalmem() + 'bytes');
console.log('Free Memory: ', os.freemem() + 'bytes');

