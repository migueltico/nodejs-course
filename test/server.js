const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');

var mime = {
  'html': 'text/html',
  'css': 'text/css',
  'jpg': 'text/jpg',
  'ico': 'image/x-icon',
  'mp3': 'audio/mpeg3',
  'mp4': 'video/mp4'
};

const server = http.createServer((req, res) => {
  var objURL = url.parse(req.url);
  var pathFile = '/public' + objURL.pathname;

  if (pathFile === 'public/') {
    pathFile = 'public/index.html';
  }

  pathFile = path.join(__dirname, pathFile);

  router();

});

function router(req, res, pathFile) {
  switch (pathFile) {
    case :

      break;
    default:

  }
}


server.listen(3000, () => console.log('Server on port 3000'));
