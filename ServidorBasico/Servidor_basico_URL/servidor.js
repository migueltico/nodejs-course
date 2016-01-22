var servidor=require('http');
var url=require('url');

function iniciar(enrutar) {

 function arracarServidor (requiere,respuesta) {
      var ruta=url.parse(requiere.url).pathname;
      enrutar(ruta);
      console.log('Alguien se Ha Conectado');
      respuesta.writeHead(200,{"Content-Type":"text/html"});
      respuesta.write("<h1>El SERVER FUNCIONA!!!<h1>");
      respuesta.end();
    }
    servidor.createServer(arracarServidor).listen(7777); 
}

exports.iniciar=iniciar;