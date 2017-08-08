var http=require('http');
var path =require('path');

var paginas=[
        {route:'',output: 'Funcionando'},
        {route:'about',output:'Un Simple ejemplo de Enrutamiento con Node'},
        {route: 'otra pagina',output: function() {
          return 'Estamos en '+this.route;
        }},//agregar mas enrutamientos aqui
];

http.createServer(function(request,response) {
  //obtengo la direccion
  var buscar=path.basename(decodeURI(request.url));
  //recorro el array
  paginas.forEach(function(pagina) {
    if(pagina.route===buscar){
      response.writeHead(200,{'Content-Type':'text/html'});
      //escribo respuesta
      response.end(typeof pagina.output === 'function' ? pagina.output():pagina.output);
      response.end('Hello, world!');
    }
  });
  if (!response.finished) {
    response.writeHead(404);
    response.end('Pagina No Encontrada');
  };

}).listen(8888);
