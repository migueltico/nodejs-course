const http = require('http');
const url = require('url');

function onRequest(req, res) {
  var pathname = url.parse(req.url).pathname;

  console.log('request ' + pathname + 'received.');

  if (pathname === '/start') {
    response(res, 200, 'Hello');
  } else if(pathname === '/finish'){
    response(res, 200, 'Bye');
  } else {
    response(res, 404, 'Not Found');
  }

}

function response(res, status, text) {
  res.writeHead(status, {'Content-Type': 'text/plain'});
  res.write(text);
  res.end();
}

http.createServer(onRequest).listen(3000);
