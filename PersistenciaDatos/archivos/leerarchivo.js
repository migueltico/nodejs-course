var fs=require('fs');
//la info esta en bits , se necesita codificar para hacerlo legible , en este caso utf8
fs.readFile('archivo.txt','utf8',function(err,data) {
  if (!err) {
    console.log(data);
  }
});