var http=require('http');
var path=require('path');
var fs=require('fs');

var mimeTypes={
  '.js':'text/javascript',
  '.html':'text/html',
  '.css':'text/css'
};

http.createServer(function(request,response) {
  var buscar=path.basename(decodeURI(request.url)) || 'index.html',
  f = 'content/'+buscar;
  //si el archivo existe
  fs.exists(f,function(exists) {
    if (exists) {
      fs.readFile(f,function (err,data) {
        if (err) {
          response.writeHead(500);response.end('Error del Servidor');return;}
          var headers={'Content-Type':mimeTypes[path.extname(buscar)]};
          response.writeHead(200,headers);
          response.end(data);
      });
      return;
    }
    response.writeHead(404);//no se ha encontrado ese archivos
    response.end('Pagina No Encontrada');
  });
}).listen(8888);