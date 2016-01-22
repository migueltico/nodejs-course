var http=require('http');
var formidable=require('formidable');
var subida_archivos=require('./modulos/subidada_archivos');

http.createServer(function(req,res) {
  if (req.method='POST') {
    //instancia de incomingForm 
    var inconming=new formidable.IncomingForm();
    //carpeta que gaurda los archivos
    incoming.uploadDir='archivos_subidos';
    //parseo de la petcion
    incoming.parse(req);
    //en caso de error 
    incoming.on('error',function(err) {
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(subida_archivos.responderSubida(false));
    });
    //cuando el archivo llego al server
    incoming.on('file',function(field,file) {
      console.log('Archivo recibido');
    });

    //se dispara antes de guardar el archivo
    incoming.on('filebBegin',function(field,file) {
      if (file.name) {
        //modificacion del nombre por codigo al azar mas nombre original
        file.path+='_'+file.name;
      };
    });
    //evento cuando los archivos fueron guardados
    incoming.on('end',function() {
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(subidada_archivos.responderSubida(true));
    });
  }else{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(subidada_archivos.dibujarFormulario());
  }
}).listen(3000);

console.log('server listening on port 3000');