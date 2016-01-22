var net=require('net');
//instanciamos un socket conn
var server=net.createServer(function(conn) {
  console.log('conectado');
  //metodo que recive datos, tomo el evento y la funcion listenner(data)
  conn.on('data',function(data) {
    console.log(data+' desde '+conn.remoteAddress+' '+ conn.remotePort);
    conn.write('Repitiendo: '+data);
  });
  //metodo que cierra connexion
  conn.on('close',function(){
    console.log('Client close connection');
  });

}).listen(8124);

console.log('escuchando en puerto 8124');
//{allowHalfOpen: false} esta por defecto