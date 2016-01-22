var servidor =require('http');
var url=require('url');
var fs=require('fs');//require file system

function iniciar(enrutar,manejador) {
	function arrancaServidor(requiere,respuesta) {

	var ruta=url.parse(requiere.url).pathname;
	console.log('alguien se ha conectado');
	var contenido=enrutar(manejador,ruta);
	//flags :a es añadir el archivo en modo de añadir
	var registro=fs.createWriteStream('registro.txt',{'flags':'a'});
	registro.write(ruta+'\n');
	//envia cabecera al navegador
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	// respuesta.write("<h1>El Servidor Funciona Correctamente</h1>");
	respuesta.write(contenido);
	respuesta.end();
	}

	servidor.createServer(arrancaServidor).listen(9000);
}
exports.iniciar=iniciar;