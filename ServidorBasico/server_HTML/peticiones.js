function inicio(respuesta) {
	console.log("Has entrado en la pagina de inicio");

  respuesta.writeHead(200,{"Content-Type":"text/html"});
  respuesta.write("<h1>Esta es la Pagina de Inicio</h1>");
  respuesta.end();

  // codigo bloqueante
  // var ahora=new Date().getTime();
  // while(new Date().getTime()<ahora+10000);
}

function pagina1 (respuesta) {
	console.log("Has entrado en la pagina1");
  respuesta.writeHead(200,{"Content-Type":"text/html"});
  respuesta.write("<h1>Esta es la Pagina de Uno</h1>");
  respuesta.end();
}

function pagina2(respuesta) {
	console.log("Has entrado en la pagina2");
  respuesta.writeHead(200,{"Content-Type":"text/html"});
  respuesta.write("<h1>Esta es la Pagina de Dos</h1>");
  respuesta.end();
}

function favicon(respuesta) {
	console.log("se ha pedido el favicon");
  respuesta.writeHead(200,{"Content-Type":"text/html"});
  respuesta.write("");
  respuesta.end();
}
exports.inicio=inicio;
exports.pagina1=pagina1;
exports.pagina2=pagina2;
exports.favicon=favicon;