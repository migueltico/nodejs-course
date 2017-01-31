const Currency = require('./lib/currency_v3');

const curr = new Currency(0.91);

console.log('50 canadian dollars equals this amount of US dollars: ');
console.log(curr.canadianToUs(50));

console.log('30 US dollars equals to this amount of canadian dollars: ');
console.log(curr.USToCanadian(30));
