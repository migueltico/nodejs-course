const http =  require('http');
const fs   =  require('fs');
const ruta =  require('path');

function start(portParameter) {
    function onRequest(req,res) {
      let url = (req.url === '/') ? '/index.html':req.url
      let rutaArchivo='./views' + url;
      console.log(rutaArchivo);
      //capturo la extencion del archivo
      let ext = ruta.extname(rutaArchivo);
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
    /*
     * Server starts with a port parameter or defined port
     * or port 3000 by default
    */
    const port = process.env.PORT || portParameter || 3000;
    const server = http.createServer(onRequest).listen(port, () => {
      console.log(`server on port: ${port}`);
    });
}

exports.start=start;
