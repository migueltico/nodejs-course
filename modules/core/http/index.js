const http = require('http');

const server = http.createServer(requestHandler);

function requestHandler(req, res) {

  res.write('Hello World from a http server');
  res.end();

}

server.listen(3000, () => console.log('Server is working!'));
