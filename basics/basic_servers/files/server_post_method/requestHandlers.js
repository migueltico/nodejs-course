var querystring= require("querystring");

function iniciar (response,postData) {
  console.log("Manipulador de peticion 'iniciar' ha sido llamado");
  var body='<!DOCTYPE html>'+'<html lang="es">'+'<head>'+'<meta charset="UTF-8" />'+'</head>'
  +'<body>'
  +'<form action="/subir" method="post">'
  +'<textarea name="text" id="" cols="10" rows="5"></textarea>'
  +'<input type="submit" value="Submit Text" />'
  +'</form>'
  +'</body></html>';
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write(body);
  response.end();

}

function subir (response,dataPosteada) {
  console.log("Manipulador de peticion 'subir' ha sido llamado");
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write("Tu Enviaste el texto: "+querystring.parse(dataPosteada)["text"]);
  response.end();
}

exports.iniciar=iniciar;
exports.subir=subir;