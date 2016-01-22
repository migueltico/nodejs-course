var http=require('http');
var path=require('path');
var fs=require('fs');

var mimeTypes={
  '.js':'text/javascript',
  '.html':'text/html',
  '.css':'text/css'
};
//objeto cache
var cache={
  store:{},
  maxSize:26214400,//(bytes) 25mb
  maxAge:5400*1000,
  cleanAfter: 7200*1000,
  cleanedAt:0,
  clean:function(now) {//esta funcion limpia cache
    if (now - this.cleanAfter>this.cleanedAt) {
      console.log('se lleva a cabo la limpieza');
      this.cleanedAt=now;
      var that=this;
      Object.keys(this.store).forEach(function(file) {
        if (now>that.store[file].timestamp + that.maxAge) {
          delete that.store[file];
        };
      });
    };
  }
};

http.createServer(function(request,response) {
  var buscar=path.basename(decodeURI(request.url)) || 'index.html',
  f = 'content/'+buscar;
  //si el archivo existe
  fs.exists(f,function(exists) {
    if (exists) {
          var headers={'Content-Type':mimeTypes[path.extname(f)]};
          if (cache[f]) {
            console.log('desde la cache');
            response.writeHead(200,headers);
            response.end(cache[f].content);
            return;
          }
          var s=fs.createReadStream(f).once('open',function() {
            response.writeHead(200,headers);
            //toma el archivo y lo stremea
            this.pipe(response);//cuando termina el stream pipe llama a response.end()
            //once se invoca solo la primera vez cuando el metodo es llamado,luego es eliminado
          }).once('error',function(e) {
            console.log(e);
            response.writeHead(500);
            response.end('Error del Server');
          });
          //almaceno en cache al tiempo de ser estremeado
          fs.stat(f,function(err,stats) {
            if (stats.size < cache.maxSize) {
            var bufferOffset=0;
            cache.store[f]={content: new Buffer(stats.size),
                            timestamp: Date.now()};
            //chunks en tamaos de 64kbs
            s.on('data',function(chunck) {
              chunck.copy(cache.store[f].content,bufferOffset);
              bufferOffset+=chunck.length;
            });
            }
          });

          return

    }
    response.writeHead(404);//no se ha encontrado ese archivos
    response.end('Pagina No Encontrada');
  });
  cache.clean(Date.now());
}).listen(8888);