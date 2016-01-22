var http=require('http');
var path=require('path');
var fs=require('fs');

var mimeTypes={
  '.js':'text/javascript',
  '.html':'text/html',
  '.css':'text/css'
};
//objeto cache
var cache={};
function cacheYEntrega(f,cb) {
  //stat provee metodos ctime  para evaluar los ultimos cambios
  fs.stat(f,function (err,stats){
    //si el contenido esta cacheado
    var ultimoCambio=Date.parse(stats.ctime),
      estaActualizado=(cache[f] && ultimoCambio> cache[f].timestamp);
    if (!cache[f]||estaActualizado) {
      //sino cargalo
      fs.readFile(f,function(err,data) {
        console.log('cargando '+f+' desde archivo ');
        if(!err){
          //si es correcto alamacenalo
          cache[f]={content:data,
                      timestamp:Date.now()//alamacena los datos del tiempo actual
                    };
        }
        cb(err,data);
      });
      return;
    }
    console.log('cargando '+f+' desde la cache');
    cb(null,cache[f].content);
  });//final del fs.stat
}

//create server
http.createServer(function(request,response) {
  var buscar=path.basename(decodeURI(request.url)) || 'index.html',
  f = 'content/'+buscar;
  //si el archivo existe
  fs.exists(f,function(exists) {
    if (exists) {
      //funcion desde la cache
        cacheYEntrega(f,function(err,data){
        if (err) {response.writeHead(500);response.end('Error del Servidor');return;}
          var headers={'Content-Type':mimeTypes[path.extname(f)]};
          response.writeHead(200,headers);
          response.end(data);
      });
      return;
    }
    response.writeHead(404);//no se ha encontrado ese archivos
    response.end('Pagina No Encontrada');
  });
}).listen(8888);