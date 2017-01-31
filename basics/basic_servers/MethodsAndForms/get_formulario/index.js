var http=require('http');
var url=require('url');
var animales=require('./modulos/animales');

http.createServer(function(req,res) {
  var query=url.parse(req.url,true).query;
  var grupo=(query.grupo!=undefined)?query.grupo:'';

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(animales.dibujarCodigoHtml(grupo));
  var variableget=query.variableget;
}).listen(3000);

console.log('listening on port 3000');
