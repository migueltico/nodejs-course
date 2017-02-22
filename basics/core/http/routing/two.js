const http  = require('http');
const url   = require('url');

var route = {
  routes: {},
  for: function (path, handler) {
    this.routes[path] = handler;
  }
};

route.for('/start', function (req, res) {
  response(res, 200, 'Hello');
});

route.for('/finish', function (req, res) {
  response(res, 200, 'Bye');
});

function response(res, status, text) {
  res.writeHead(status, {'Content-Type': 'text/plain'});
  res.write(text);
  res.end();
}

function onRequest(req, res) {
  var pathname = url.parse(req.url).pathname;

  if (typeof route.routes[pathname] === 'function') {
    route.routes[pathname](req, res);
  }else{
    response(res, 404, 'Not Found');
  }
}

http.createServer(onRequest).listen(3000);
