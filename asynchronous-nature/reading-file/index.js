const fs = require('fs');

var options = {encodig: 'utf-8'};

fs.readFile(__dirname + '/mytext.txt', options, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString().match(/t/gi).length + " letter T's");
});

// if this would be synchronous,
// we could see it after the letter counter
console.log('hello world');
