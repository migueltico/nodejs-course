const mustache = require('mustache');

var result = mustache.render('Hi, {{first}} {{last}}', {
  first: 'Isaac',
  last: 'Asimov'
});

console.log(result);
