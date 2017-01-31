const http  = require('http');
const fs    = require('fs');

http.createServer(handleServer).listen(3000);

function handleServer(req, res) {
  if(req.url === '/'){
    getTitles(res);
  }
}

function getTitles(res) {
  fs.readFile('./title.json', (err, titles) => {
    if (err) {
      hadError(err, res);
    }else{
      var titles = JSON.parse(titles.toString());
      fs.readFile('./template.html', (err, template) => {
        if (err) {
          hadError(err, res);
        }else {
          var template = template.toString();
          var html = template.replace('%', titles.join('<li></li>'));
          res.end(html);
        }
      });
    }

  });
}

function hadError(err, res) {
  console.log(err);
  res.send('Server Error');
}
