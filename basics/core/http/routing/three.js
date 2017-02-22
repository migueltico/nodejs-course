const http  = require('http');
const url   = require('url');

var route = {
  routes: {},
  for: function (path, handler) {
    this.routes[metho + path] = handler;
  }
};
route.for("GET", "/start", function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello");
  response.end();
});

route.for("GET", "/finish", function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Goodbye");
  response.end();
});

route.on("GET", "/echo", function(request, response){
  var body = '<html>' +
    '<head><title>Node.js Echo</title></head>' +
    '<body>' +
      '<form method="POST">' +
        '<input type="text" name="msg"/>' +
        '<input type="submit" value="echo"/>' +
        '</form>' +
        '</body></html>';
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(body);
        response.end();
});

function onRequest(request, response) {
  var pathname = url.parse(request.url).pathname;
  console.log("Request for " + request.method + pathname +" received.");
  if(typeof(route.routes[request.method + pathname])==='function'){
      route.routes[request.method + pathname](request, response);
    } else {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.end("404 Not Found");
    }
  }

http.createServer().listen(3000);
