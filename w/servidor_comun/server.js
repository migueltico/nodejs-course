var http=require('http');

function iniciar () {
    function onRequest(req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    var arr=[
      '<html>',
      '<head>',
        '<title>Hola Mundo</title>',
        '<style>h1{background:black;color:#fff;font-family: tahoma;padding: 5px;}</style>',
      '</head>',
      '<body>',
    '<h1>Hola Mundo</h1>',
      '</body>',
      '</html>'
    ];
    res.write(arr.join(""));
    res.end();
  }
  var server=http.createServer(onRequest).listen(7777);
  console.log("Escuchando en el Puerto 7777");
}

exports.iniciar=iniciar;