// considere asynchronous programming

var fs = require('fs')

var content = "line1\nline2"

fs.writeFile('./file1.txt', content, function(err) {
	if (err)
		console.log(err)
	else
		console.log('The file was created')
});

console.log('last line');
