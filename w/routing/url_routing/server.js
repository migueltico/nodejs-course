// core modules
const http  = require('http');

// port
const PORT  = 3000;


function start(router) {
  console.log('starting...');

  function onRequest(req, res) {

    router.route(req);

    res.writeHead(200, {
      'Content-type': 'text/plain'
    });
    res.write('the first Server');
    res.end();
  }

  http
    .createServer(onRequest)
    .listen(PORT);

  console.log('has benn started.');
}

exports.start = start;
