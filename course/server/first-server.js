var http = require('http');
// there is a similar module called https

// notes that entire server is handled just
// for one function
var server = http.createServer(function(req, res) {
	// header status, and content-type of data
	res.writeHead(200, { 'Content-Type': 'text/html'});

	// we can use write so many times
	// res.end('Hello World\n');
	res.write('<!doctype><html><head></head>'+
		'<body><h1>Workin in this site</h1></body></html>');

	// but we have to finish it with end
	res.end();
});

server.listen(3000);

console.log('Server is working!');
