var fs=require('fs');
//dato (tipo string) que quiero persistir en un archivo0
var datos="Ejemplo de un dato que quiero escribir en un archivo para persitir";//este dato se reemplzara en caso de ejecutarse denuevo

fs.writeFile('archivo.txt',datos,function(err) {
  if (!err) {
    console.log('Los datos han sido escritos en un archivo.txt');
  }else{
    //error consiste en escribir en un archivo que no tiene permiso
    throw err;
  }
})