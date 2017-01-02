var buf = new Buffer(4);

console.log(buf);
console.log(buf.toString());
console.log(buf.toString('hex'));

buf.fill(0);

console.log(buf);

// unsigned integers

// buf.writeUint8(0x78,2);
// buf.readUint8(1);

console.log(buf);
