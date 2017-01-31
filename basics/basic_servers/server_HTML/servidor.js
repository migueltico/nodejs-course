var servidor =require('http');
var url=require('url');
var fs=require('fs');//require file system

function iniciar(enrutar,manejador) {
	function arrancaServidor(requiere,respuesta) {

	var ruta=url.parse(requiere.url).pathname;
	if (ruta ==☺"/") {
		ruta="index.html";
	};
	console.log('alguien se ha conectado');
	//var contenido=enrutar(manejador,ruta,respuesta);
	//lee desde el DiscoDuro index.html
	var index=fs.readFileSync('www/'+ruta);
	var registro=fs.createWriteStream('registro.txt',{'flags':'a'});
	registro.write(ruta+'\n');
	//envia cabecera al navegador
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write(index);
	respuesta.end();
	}

	servidor.createServer(arrancaServidor).listen(9000);
}
exports.iniciar=iniciar;