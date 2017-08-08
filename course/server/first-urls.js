const http = require('http');

function requestHandler(req, res) {
  if (req.url === '/') {
    res.end('Welcome to the home page');
  } else if (req.url === '/about'){
    res.end('welcome to the about page');
  } else {
    res.end('Error! File not found');
  }
}

http.createServer(requestHandler)
  .listen(3000, () => console.log('server started'));
