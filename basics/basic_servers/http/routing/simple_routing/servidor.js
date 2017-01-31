const http = require('http');
const fs = require('fs');

var server = http.createServer(function (peticiones, respuestas) {
  if (peticiones.url === '/holamundo') {
    fs.readFile('./index.html', function (errores, datos) {
      respuestas.end(datos.toString());
    });
  }else {
    fs.readFile('./404.html',function (errores , datos) {
      respuestas.end(datos.toString());
    });
  }
});

server.listen(3000, function () {
  console.log('servidor escuchando');
});
