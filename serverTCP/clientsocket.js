var net =require('net');
var cliente=new net.Socket();
//los datos son enviados mediantes un buffer, pora leerlos se usa setEncoding
cliente.setEncoding('utf8');

//conectar al server
cliente.connect('8124','localhost',function() {
  console.log('conectado al server');
  cliente.write('Ya podemos comunicarnos sin un navegador');
});

//preparado para entradas desde la terminal
process.stdin.resume();

//cuando recibe datos los envia al server
process.stdin.on('data',function(data) {
  cliente.write(data);
});

//cuando recibe datos de vuelta, los imprime en la consola
cliente.on('data',function(data) {
  console.log(data);
});

cliente.on('close',function() {
  console.log('la conexion se ha cerrado');
});