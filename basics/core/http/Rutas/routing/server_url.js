var http=require('http');
var url=require('url');

var paginas=[
        {id: '1',route:'',output: 'Funcionando'},
        {id: '2',route:'about',output:'Enrutamiento Multinivel con Node'},
        {id: '3',route: 'otra pagina',output: function() {
          return 'Estamos en '+this.route;
        }}
        ];
http.createServer(function(request,response) {
  //obtengo la direccion mediante el modulo url
  var id=url.parse(decodeURI(request.url),true).query.id;
  if (id) {
    paginas.forEach(function(pagina) {
      if(pagina.id===id){
        response.writeHead(200,{'Content-Type':'text/html'});
        //escribo respuesta
        response.end(typeof pagina.output === 'function' ? pagina.output():pagina.output);
        response.end('Hello, world!');
      }
    });
  };

  if (!response.finished) {
    response.writeHead(404);
    response.end('Pagina No Encontrada');
  };

}).listen(8888);