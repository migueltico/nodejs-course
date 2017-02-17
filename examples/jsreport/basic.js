var http = require('http');
var jsreport = require('jsreport')().init();

http.createServer(function (req, res) {

  jsreport.init;
  jsreport.render("<h1>Hello world</h1>")
    .then(function(out) {
      out.stream.pipe(res);
    }).catch(function(e) {
      res.end(e.message);
    });

}).listen(3000, '127.0.0.1');
