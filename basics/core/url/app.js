const http  = require('http');
const url   = require('url');

const PORT  = 3000;

function onRequest(req, res) {

  console.log(url.parse(req.url));

  res.writeHead(200, {
    'Content-type': 'text/plain'
  });
  res.write('the first Server');
  res.end();
}

function start(req, res) {
  console.log('starting...');


  http
    .createServer(onRequest)
    .listen(PORT);

  console.log('has benn started.');
}

module.exports = start;
