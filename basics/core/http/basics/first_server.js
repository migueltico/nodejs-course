var servidor = require('http');

function arrancaServidor(requiere,respuesta) {
	console.log('alguien se ha conectado');

	//envia cabecera al navegador
	respuesta.writeHead(200, {
		"Content-Type":"text/html",
		"Access-Control-Allow-Origin": '*'
	});

	respuesta.write("<h1>El Servidor Funciona Correctamente</h1>");
	respuesta.end();
}

servidor.createServer(arrancaServidor).listen(8888);
