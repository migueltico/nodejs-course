const servidor  = require('http');
const fs        = require('fs');

const port      = 8888;

function arrancaServidor(requiere,respuesta) {
	console.log('alguien se ha conectado');

	//envia cabecera al navegador
	respuesta.writeHead(200, {
		"Content-Type":"text/html",
		"Access-Control-Allow-Origin": '*'
	});

  var read = fs.createReadStream(__dirname + '/index.html');
	read.pipe(res);

}

servidor.createServer(arrancaServidor).listen(port);
