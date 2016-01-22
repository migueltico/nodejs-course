var http=require("http");
var url=require("url");

function iniciar (route,handle) {
  function onRequest (request,response) {
    //obtengo el nombre de la ruta 
    var pathname=url.parse(request.url).pathname;
    var dataPosteada="";
   console.log("Petición para "+pathname+" recibida");

   //recibiendo los datos enviados por el metodo POST
   request.setEncoding("utf-8");
   request.addListener("data",function(trozoPosteado) {
     dataPosteada+=trozoPosteado;
     console.log("Recibido trozo POST '"+trozoPosteado+"'.");
   });
   request.addListener("end",function() {
     route(handle,pathname,response,dataPosteada);
   });

  }
  http.createServer(onRequest).listen(7777);
  console.log("Servidor Iniciado");
}

exports.iniciar=iniciar;