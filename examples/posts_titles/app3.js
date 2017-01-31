const http  = require('http');
const fs    = require('fs');

var server = http.createServer(handleServer).listen(3000);

function handleServer(req, res) {
  getTitles(res);
}

function getTitles(res) {
  fs.readFile('./title.json', (err, titles) => {
    if(err) return hadError(err, res);
    getTemplate(JSON.parse(titles.toString()), res);
  });
}

function getTemplate(titles, res) {
  fs.readFile('./template.html', (err, data) => {
    if(err) return hadError(err, res);
    formatHtml(titles, data.toString(), res);
  });
}

function formatHtml(titles, tmpl, res) {
  var html = tmpl.replace('%', titles.join('<li></li>'));
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
}

function hadError(err, res) {
  console.log(err);
  res.send(err);
}
