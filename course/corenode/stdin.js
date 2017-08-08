//cada app de nod es una instancia de un objeto process, 
//la funcion de el objeto process es proveer informacion sobre la app y su entorno

//metodo stdin -stdout son asincronos - stderr es sincrono y de bloqueo
//escucha datos con stdin
process.stdin.resume();
process.stdin.on('data',function (chunk) {
  process.stdout.write('data: '+chunk);
});

//escribe con stdout
