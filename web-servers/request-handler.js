const http = require('http');

const server = http.createServer(requestHandler);

// imagine this handle on a real project
// that's why we need frameworks

function requestHandler(req, res) {
  if (req.url === "/") {
    res.end("Welcome to the homepage!");
  } else if (req.url === "/about") {
    res.end("Welcome to the about page!");
  } else {
    res.end("Error! File not found.");
  }
}

server.listen(3000);
