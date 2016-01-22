var http=require('http');
var querystring=require('querystring');
var mensajes=require('./modulos/mensajes');
var mensajes_lista=new Array();

//maximo peso que se le permite al usuario
var data_post_max=8*1024*1024; //8MB

http.createServer(function(req,res) {
  if (req.method=='POST') {
    var data_post='';
    
    req.on('data',function(data_cortada) {
      data_post+=data_cortada;
      if (data_post.length>data_post_max) {
        this.pause();
        res.writeHead(413);
        res.end('Ha surgido un error y no puede continuarse');
      };
    });

    req.on('end',function() {
      //conversion de datos a json
      var data_post_objeto=querystring.parse(data_post);
      mensajes_lista.push({nombre:data_post_objeto.nombre,mensaje:data_post_objeto.mensaje});
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(mensajes.dibujarCodigoHtml(mensajes_lista));
    });
  }else{
    res.writeHead(200,{'Content-Type':'text/html'});
      res.end(mensajes.dibujarCodigoHtml(mensajes_lista));
  }
}).listen(3000);
console.log('server listening on port 3000');

