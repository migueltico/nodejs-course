var http=require('http');
var fs=require('fs');
var ruta=require('path');

function iniciar () {
    function onRequest(req,res) {
      var rutaArchivo='./views'+((req.url=='/')?'/index.html':req.url);
      console.log(rutaArchivo);
      //capturo la extencion del archivo
      var ext=ruta.extname(rutaArchivo);
      var contentType='text/html';
      switch(ext){
        case '.css':
          contentType='text/css';
          break;
        case '.js':
          contentType='text/javascript';
          break;
      }

      //si existe el archivo
      fs.exists(rutaArchivo,function(existe) {
        if (existe) {
          fs.readFile(rutaArchivo,function(error,contenido) {
            if (error) {
              res.writeHead(500);
              res.end();
            }else{
              res.writeHead(200, {"Content-Type": contentType});
              
              res.end(contenido);
            }
          })
        }else{
          res.writeHead(404);
          res.end();
        }
      });

    }
    var server=http.createServer(onRequest).listen(7777);
    console.log("Escuchando en el Puerto 7777");
}

exports.iniciar=iniciar;