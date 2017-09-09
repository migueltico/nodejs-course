var PI = 3.14;

function add(x1, x2) {
	return x1 + x2;
}

function subtract(x1, x2) {
	return x1 - x2;
}

function divide(x1, x2){
	if(x2 === 0) {
		showDivisionError(); 
	} else {
		return x1 / x2;
	}
}

function showDivisionError() {
	console.log('can not be divided by zero');
}

exports.addition = add;
exports.subtraction = subtract;
exports.division = divide;
exports.PI_Constant = PI;


