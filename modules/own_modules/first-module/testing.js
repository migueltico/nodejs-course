var worker = require('./dowork');

var firstNumber = 1;
var secondNumber = 2;

var result = worker.doWork(firstNumber, secondNumber);
console.log(result);
