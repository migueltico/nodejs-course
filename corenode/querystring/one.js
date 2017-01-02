const querystring = require('querystring');

const weirdoString = `name:fabian;shape:fox;condition:new`;
const result = querystring.parse(weirdoString, ';', ':');

console.log(result);
