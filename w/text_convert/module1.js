var name = exports.name = 'Packt';
var secret = 'Fabian';

exports.lower = function(input) {
  return input.toLowerCase();
}

exports.upper = function(input) {
  return input.toUpperCase();
}

exports.get_name = function() {
  return name;
}

exports.get_secret = function() {
  return secret;
}
