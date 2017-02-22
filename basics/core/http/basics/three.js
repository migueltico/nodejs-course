const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": 'text/html'});
  res.write('<html>');
  res.write('<head><title>Hello Nodejs</title></head>');
  res.write('<body>Hello World</body>');
  res.write('</html>');
  res.end();
}).listen(3000);
