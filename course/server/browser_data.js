var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	
	var objURL = url.parse(req.url);
	
	// logging browser data
	console.log('resoure path and parameters: ',objURL.path);
	console.log('just the path and name of the resoure', objURL.pathname);
	console.log('resource parameters', objURL.query);

	// aswering somethign back
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(`
		<!doctype>
		<html>
			<head>
				<title>Browser data</title>
			</head>
			<body>
				<h1>Data received!</h1>
			</body>
		</html>
	`);
	res.end();
});

server.listen(3000, function() {
	console.log('server started')
});

// send to client
// http://localhost:3000/folder1/page1.html?parameter=1&parameter2=20
