// importing modules
// the most part of the time
// the name of the variable is the
// same of the module
var math = require('./math');

var sumResult = math.addition(2, 2);//4
console.log('the addition of 2 + 2: ' + sumResult);

var subResult = math.subtraction(4, 2);//2
console.log('the subtraction of 4 - 2: ' + subResult); 

var divResult = math.division(6, 3); // 2
console.log('The divition is 6/3: ' + divResult);

console.log('The PI value: ', math.PI_Constant);

// this throws an error
// because not exits in this context
console.log(math.showDivisionError());
