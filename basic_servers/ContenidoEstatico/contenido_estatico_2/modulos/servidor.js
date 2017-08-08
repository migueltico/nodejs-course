var mime_types={
  'js':'text/javascript',
  'html' : 'text/html',
   'css' : 'text/css',
   'jpg' : 'image/jpg',
   'gif' : 'image/gif',
   'png' : 'image/png'
};

function crear (http,url,fs) {
  http.createServer(function(req,res) {
    var ruta_archivo=devolverRutaArchivo(url,req);
    leerArchivo(fs,ruta_archivo,function(numero,contenido_archivo) {
      if (numero===404) {
        res.writeHead(numero,'text/plain');
        res.end('Error 404, File Not Found');
      }else if(numero===500){
        res.writeHead(numero,'text/plain');
        res.end('Error Interno');
      }else{
        var extension=ruta_archivo.split('.').pop();
        var mime_type=mime_types[extension];
        res.writeHead(numero,{'Content-Type':mime_type});
        res.end(contenido_archivo);
      }
    })
  }).listen(3000);
}

function devolverRutaArchivo (url,req) {
  var path_nombre=(url.parse(req.url).pathname=='/')?'/index.html':url.parse(req.url).pathname;
  var ruta_archivo='contenido/'+path_nombre;
  return ruta_archivo;
}

function leerArchivo (fs,ruta_archivo,callback) {
  fs.exists(ruta_archivo,function(existe) {
    if (existe) {
      fs.readFile(ruta_archivo,function(error,contenido_archivo) {
        if (error) {
          callback(500,null);
        }else{
          callback(200,contenido_archivo);
        }
      });
    }else{
      callback(404,null);
    }
  });
}
exports.crear=crear;