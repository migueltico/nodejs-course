var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	
	var objURL = url.parse(req.url);
	var path = 'static' + objURL.pathname;

	if(path === 'static/') {
		path = 'static/index.html';
	} 
	
	if (fs.existsSync(path)) {
		fs.readFile(path, (err, content) => {
			if (err) {
				res.writeHead(500, {'Content-Type': 'text/plain'});
				res.write('Internal Error');
				res.end();
			} else {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(content);
				res.end();
			}
		});
	} else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.write('<!doctype><html><head></head><body>Not Found</body></html>');
		res.end();
	}
});;

server.listen(3000, () => {
	console.log('server on port 3000')
});

