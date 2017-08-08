var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("hola Mundo");
  response.end();
}).listen(8888);

