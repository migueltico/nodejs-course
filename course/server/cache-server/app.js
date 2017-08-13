// read from HD is an expensive I/O operation
const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');

const mime = {
	'html': 'text/html',
	'css': 'text/css',
	'jpg': 'image/jpg',
	'ico': 'image/x-icon',
	'mp3': 'audio/mpeg3',
	'mp4': 'video/mp4'
};

var cache = {};

const server = http.createServer((req, res)=> {
	var objUrl = url.parse(req.url);
	var pathFile = 'static' + objUrl.pathname;

	if(pathFile == 'static/') {
		pathFile = 'static/index.html';
	}

	pathFile = path.join(__dirname, pathFile);

	if(cache[pathFile]) {
		var vec = pathFile.split('.');
		var extension = vec[vec.length - 1];
		var mimeFile = mime[extension];

		res.writeHead(200, {'Content-Type': mimeFile});
		res.write(cache[pathFile]);
		res.end();
		console.log('File fron cache: ', pathFile);
	} else {
		fs.access(pathFile, (err) => {
			if (err) {
				if (err.code === 'ENOENT') {
					res.writeHead(404, {'Content-Type': 'text/html'});
					res.write(`
						<h1>
							Not Found
						</h1>
					`);
					res.end();
				}
			} else {
				fs.readFile(pathFile, (err, content) => {
					if (err) {
						res.writeHead(500, {'Content-Type': 'text/plain'});
						res.write(content);
						res.end();
					} else {
						cache[pathFile] = content;
						var vec = pathFile.split('.');
						var extension = vec[vec.length - 1];
						var mimeFile = mime[extension];
						res.writeHead(200, {'Content-Type': mimeFile});
						res.write(content);
						res.end();
					}
				});
			}
		})
	}
});

server.listen(3000, () => {
	console.log('server on port 3000');
});
