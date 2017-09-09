var fs = require('fs');

fs.readFile('./file1.txt', function(error, data) {
	if(error) {
		console.log(error);
	} else {
		console.log(data.toString());
	}
});

console.log('last line of the program');

function read(err, data) {
	if(err) {
		console.log(err);
	} else {
		console.log(data.toString());
	}
}

fs.readFile('./file1.txt', read);
console.log('last line of the program');
