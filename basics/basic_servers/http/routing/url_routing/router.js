const url = require('url');

function route(req) {
    var pathname = url.parse(req.url).pathname;
    console.log('Route for path requested:',pathname);
}

exports.route = route;
