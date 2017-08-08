const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');

var mime = {
	'html': 'text/html',
	'css': 'text/css',
	'jpg': 'image/jpg',
	'png': 'image/png',
	'ico': 'image/x-icon',
	'mp3': 'audio/mpeg3',
	'mp4': 'video/mp4'
};

const server = http.createServer((req, res) => {
	
	let objURL = url.parse(req.url);

	let pathToFile = 'static' + objURL.pathname;

	if(pathToFile === 'static/') {
		pathToFile = 'static/index.html';
	} 

	pathToFile = path.join(__dirname, pathToFile);


	fs.access(pathToFile, (err) => {
		if(err) {
			if(err.code === 'ENOENT') {
				res.writeHead(404, {'Content-Type': 'text/html'});
				res.write(`
					<!doctype>
					<html>
						<head>
							<title>Not Found</title>
						</head>
						<body>
							<h1>Not Found</h1>
						</body>
					</html>
				`);
				res.end();
			}
			console.log(err);
		} else {
				fs.readFile(pathToFile, (err, content) => {
					if(err) {
						res.writeHead(500, {'Content-Type': 'text/plain'});
						res.write('Internal error');
						res.end();
					}	else {
						var vec = pathToFile.split('.');
						var extension = vec[vec.length - 1];
						var mimearchivo = mime[extension];
						console.log(mimearchivo)
						res.writeHead(200, {'Content-Type': mimearchivo});
						res.write(content);
						res.end();
					}
				});
		} 
	});
});

server.listen(3000, () => console.log(`server on port ${3000}`))
